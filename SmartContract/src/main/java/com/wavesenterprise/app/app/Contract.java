package com.wavesenterprise.app.app;

import com.wavesenterprise.app.domain.Package;
import com.wavesenterprise.app.domain.Transfer;
import com.wavesenterprise.app.domain.User;
import com.wavesenterprise.sdk.contract.api.annotation.ContractAction;
import com.wavesenterprise.sdk.contract.api.annotation.ContractHandler;
import com.wavesenterprise.sdk.contract.api.annotation.ContractInit;
import com.wavesenterprise.sdk.contract.api.domain.ContractCall;
import com.wavesenterprise.sdk.contract.api.state.ContractState;
import com.wavesenterprise.sdk.contract.api.state.TypeReference;
import com.wavesenterprise.sdk.contract.api.state.mapping.Mapping;

import java.text.SimpleDateFormat;
import java.util.Date;

@ContractHandler
public class Contract {
    final private ContractCall call;
    final private Mapping<User> users;
    public Mapping<Transfer> transfers;
    public Mapping<Package> packages;

    int counter = 1;

    public Contract(ContractState state, ContractCall call){
        this.call = call;
        this.users = state.getMapping(new TypeReference<User>(){}, "USER_MAPPING");
    }

    public void createUser(String name, double balance, String homeAddress, String role, String departmentId, String address){
        users.put(address, new User(name, homeAddress, balance, role, departmentId, address));
    }

    @ContractInit
    public void init() {
        createUser("Семен Семен Семенович", 50, "Ростов-На-Дону", "admin", "", "3NqyWD9RQeaMnKT6K3suLaYdh6n8AUE9ep4");
        createUser("Петров Петр Петрович", 50, "Ростов-На-Дону", "employee", "RR344000", "3NgZesy9RTcCvqJ5B3KU2R3fyYQcxQRm6fF");
        createUser("Антонов Антон Антонович", 50, "Таганрог", "employee", "RR347900", "3NsBJbQvU4RArJ3NnmaLge4y4KbHcnh5EDJ");
        createUser("Юрьев Юрий Юрьевич", 50, "Ростов-На-Дону", "user", "", "3Nn2iVjVN3uDmpvHPVvC3nBCpEPXkMsXFK6");
    }

    public User getUserOrThrow(String address) { return users.tryGet(address).orElseThrow(); }

    @ContractAction
    public void register(String name, String homeAddress){ createUser(name, 0, homeAddress, "user", "", call.getCaller()); }

    @ContractAction
    public void changeAnotherUserRole(String role, String address, String departmentId){
        if(getUserOrThrow(call.getCaller()).getRole().equalsIgnoreCase("admin")){
            if(role.equalsIgnoreCase("user") || role.equalsIgnoreCase("employee")) {
                User user = getUserOrThrow(address);
                user.setRole(role);
                user.setDepartmentId(role.equalsIgnoreCase("user") ? "" : departmentId);
                users.put(address, user);
            }
        }
    }

    @ContractAction
    public void changeDepartmentId(String address, String departmentId){
        if(getUserOrThrow(call.getCaller()).getRole().equalsIgnoreCase("admin")){
            if(getUserOrThrow(address).getRole().equalsIgnoreCase("employee")){
                User user = getUserOrThrow(address);
                user.setDepartmentId(departmentId);
                users.put(address, user);
            }
        }
    }

    @ContractAction
    public void changeName(String name){
        User user = getUserOrThrow(call.getCaller());
        user.setName(name);
        users.put(call.getCaller(), user);
    }

    @ContractAction
    public void changeHomeAddress(String homeAddress){
        User user = getUserOrThrow(call.getCaller());
        user.setHomeAddress(homeAddress);
        users.put(call.getCaller(), user);
    }

    @ContractAction
    public void sendTransfer(String address, double amount, long timeToKeepAlive){
        if(amount >= getUserOrThrow(call.getCaller()).getBalance()){
            User user = getUserOrThrow(call.getCaller());
            user.setBalance(user.getBalance() - amount);
            transfers.put(String.valueOf(new Date().getTime()), new Transfer(call.getCaller(), address, amount, timeToKeepAlive));
            users.put(call.getCaller(), user);
        }
    }

    @ContractAction
    public void acceptOrRejectTransfer(String id, boolean wantToAccept){
        Transfer transfer = transfers.get(id);
        if(transfer.getReceiverAddress().equalsIgnoreCase(call.getCaller()) && transfer.isActive()){
            User receiver;
            if(wantToAccept) {
                receiver = getUserOrThrow(call.getCaller());
            }
            else {
                receiver = getUserOrThrow(transfer.getSenderAddress());
            }
            receiver.setBalance(receiver.getBalance() + transfer.getAmount());
            transfer.setActive(false);
            users.put(receiver.getAddress(), receiver);
            transfers.put(id, transfer);
        }
    }

    @ContractAction
    public void sendPackage(String sendTo, String sendFrom, String type, String receiver, int packageClass, double weight, boolean canChangeCost){
        String trackNum = "RR" + new SimpleDateFormat("ddMMyyyy").format(new Date()) +  counter++  +  "347901" + "346772";
        Package packagee = new Package(sendTo, sendFrom, type, trackNum, call.getCaller(), receiver, packageClass, weight, canChangeCost);
        if(packagee.getTotalCost() <= getUserOrThrow(call.getCaller()).getBalance()){
            packages.put(trackNum, packagee);
        }
    }

    @ContractAction
    public void acceptOrRejectPackage(String trackNum){
        Package packagee = packages.get(trackNum);
        if(packagee.getReceiver().equalsIgnoreCase(call.getCaller()) && packagee.isActive()){
            User sender = getUserOrThrow(packagee.getSender());
            if(sender.getBalance() >= packagee.getTotalCost()){
                sender.setBalance(sender.getBalance() - packagee.getTotalCost());
            }
            packagee.setActive(false);
            packages.put(trackNum, packagee);
        }
    }

    @ContractAction
    public void increaseDeclaredValue(String trackNum, double amount){
        if(getUserOrThrow(call.getCaller()).getRole().equalsIgnoreCase("employee")){
            Package packagee = packages.get(trackNum);
            if(packagee.getReceiver().equalsIgnoreCase(call.getCaller()) && packagee.isActive()){
                packagee.setDeclaredValue(packagee.getDeclaredValue() + amount);
                packages.put(trackNum, packagee);
            }
        }
    }

}
