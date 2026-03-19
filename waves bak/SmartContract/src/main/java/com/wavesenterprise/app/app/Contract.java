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
    final public ContractState timestamp;

    int counter = 1;

    public Contract(ContractState state, ContractCall call){
        this.call = call;
        this.users = state.getMapping(new TypeReference<User>(){}, "USER_MAPPING");
        this.timestamp = state.put("timestamp", new Date());
    }

    public void createUser(String name, double balance, String homeAddress, String role, String departmentId, String address){
        users.put(address, new User(name, homeAddress, balance, role, departmentId, address));
    }

    @ContractInit
    public void init() {
/* node-0 */  createUser("Семен Семен Семенович", 50, "Ростов-На-Дону", "admin", "", "3NqyWD9RQeaMnKT6K3suLaYdh6n8AUE9ep4");
/* node-1 */  createUser("Петров Петр Петрович", 50, "Ростов-На-Дону", "employee", "RR344000", "3NgZesy9RTcCvqJ5B3KU2R3fyYQcxQRm6fF");
/* node-2 */  createUser("Антонов Антон Антонович", 50, "Таганрог", "employee", "RR347900", "3NsBJbQvU4RArJ3NnmaLge4y4KbHcnh5EDJ");
/* node-3 */  createUser("Юрьев Юрий Юрьевич", 50, "Ростов-На-Дону", "user", "", "3Nn2iVjVN3uDmpvHPVvC3nBCpEPXkMsXFK6");
    }

    @ContractAction
    public void register(String name, String homeAddress){ createUser(name, 0, homeAddress, "user", "", call.getCaller()); }

    @ContractAction
    public void changeAnotherUserRole(String role, String address, String departmentId){
        if(users.get(call.getCaller()).getRole().equalsIgnoreCase("admin")){
            if(role.equalsIgnoreCase("user") || role.equalsIgnoreCase("employee")) {
                User user = users.get(address);
                user.setRole(role);
                user.setDepartmentId(role.equalsIgnoreCase("user") ? "" : departmentId);
                users.put(address, user);
            }
        }
    }

    @ContractAction
    public void changeDepartmentId(String address, String departmentId){
        if(users.get(call.getCaller()).getRole().equalsIgnoreCase("admin")){
            if(users.get(address).getRole().equalsIgnoreCase("employee")){
                User user = users.get(address);
                user.setDepartmentId(departmentId);
                users.put(address, user);
            }
        }
    }

    @ContractAction
    public void changeName(String name){
        User user = users.get(call.getCaller());
        user.setName(name);
        users.put(call.getCaller(), user);
    }

    @ContractAction
    public void changeHomeAddress(String homeAddress){
        User user = users.get(call.getCaller());
        user.setHomeAddress(homeAddress);
        users.put(call.getCaller(), user);
    }

    @ContractAction
    public void sendTransfer(String address, double amount, long timeToKeepAlive){
        if(amount >= users.get(call.getCaller()).getBalance()){
            User user = users.get(call.getCaller());
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
            receiver = users.get(wantToAccept ? call.getCaller() : transfer.getSenderAddress());
            receiver.setBalance(receiver.getBalance() + transfer.getAmount());
            transfer.setActive(false);
            users.put(receiver.getAddress(), receiver);
            transfers.put(id, transfer);
        }
    }

    @ContractAction
    public void sendPackage(String sendTo, String sendFrom, String type, String receiver, int packageClass, double weight, boolean canChangeCost, String twoIndexes){
        String trackNum = "RR" + new SimpleDateFormat("ddMMyyyy").format(new Date()) +  counter++  + twoIndexes;
        Package packagee = new Package(sendTo, sendFrom, type, trackNum, call.getCaller(), receiver, packageClass, weight, canChangeCost);
        User sender = users.get(call.getCaller());
        if(packagee.getTotalCost() <= sender.getBalance()){
            sender.setBalance(sender.getBalance() - packagee.getTotalCost());
            packages.put(trackNum, packagee);
        }
    }

    @ContractAction
    public void increaseDeclaredValue(String trackNum, double amount){
        if(users.get(call.getCaller()).getRole().equalsIgnoreCase("employee")){
            Package packagee = packages.get(trackNum);
            User sender = users.get(packagee.getSender());
            if(sender.getBalance() >= amount * 0.1 && packagee.isActive()){
                packagee.setDeclaredValue(packagee.getDeclaredValue() + amount);
                sender.setBalance(sender.getBalance() - amount * 0.1);
                packages.put(trackNum, packagee);
            }
        }
    }

    @ContractAction
    public void acceptOrRejectPackage(String trackNum){
        Package packagee = packages.get(trackNum);
        if(packagee.getReceiver().equalsIgnoreCase(call.getCaller()) && packagee.isActive()){
            packagee.setActive(false);
            packages.put(trackNum, packagee);
        }
    }

}
