package com.wavesenterprise.app.domain;

public class Transfer {
    String senderAddress;
    String receiverAddress;
    double amount;
    int timeToKeepAlive;
    boolean isActive;
    String id;

    public Transfer(String senderAddress, String receiverAddress, double amount, int timeToKeepAlive, String id){
        this.senderAddress = senderAddress;
        this.receiverAddress = receiverAddress;
        this.amount = amount;
        this.timeToKeepAlive = timeToKeepAlive;
        this.isActive = true;
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSenderAddress() {
        return senderAddress;
    }

    public void setSenderAddress(String senderAddress) {
        this.senderAddress = senderAddress;
    }

    public String getReceiverAddress() {
        return receiverAddress;
    }

    public void setReceiverAddress(String receiverAddress) {
        this.receiverAddress = receiverAddress;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public int getTimeToKeepAlive() {
        return timeToKeepAlive;
    }

    public void setTimeToKeepAlive(int timeToKeepAlive) {
        this.timeToKeepAlive = timeToKeepAlive;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

}
