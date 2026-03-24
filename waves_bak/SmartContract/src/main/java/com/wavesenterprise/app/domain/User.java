package com.wavesenterprise.app.domain;

public class User {

    String name;
    String homeAddress;
    double balance;
    String role;
    String address;
    String departmentId;

    public User(String name, String homeAddress, double balance, String role, String departmentId, String address){
        this.name = name;
        this.balance = balance;
        this.role = role;
        this.homeAddress = homeAddress;
        this.address = address;
        this.departmentId = departmentId;
    }

    public User(){};

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getDepartmentId() { return departmentId; }
    public void setDepartmentId(String departmentId) {
        this.departmentId = departmentId;
    }

    public double getBalance() {
        return balance;
    }
    public void setBalance(double balance) { this.balance = balance; }

    public String getHomeAddress() {
        return homeAddress;
    }
    public void setHomeAddress(String homeAddress) {
        this.homeAddress = homeAddress;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
}
