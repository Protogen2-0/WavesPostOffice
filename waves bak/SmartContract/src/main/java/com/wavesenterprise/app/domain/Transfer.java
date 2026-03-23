package com.wavesenterprise.app.domain;
import java.util.Date;

public class Transfer {
    String senderAddress;
    String receiverAddress;
    public int amount;
    int timeUntilItsAlive;
    boolean isActive;

    public Transfer(String senderAddress, String receiverAddress, int amount, int timeToKeepAlive){
        this.senderAddress = senderAddress;
        this.receiverAddress = receiverAddress;
        this.amount = amount;
        this.timeUntilItsAlive = timeToKeepAlive;
        this.isActive = true;
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

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public int getTimeUntilItsAlive() {
        return timeUntilItsAlive;
    }

    public void setTimeUntilItsAlive(int timeUntilItsAlive) {
        this.timeUntilItsAlive = timeUntilItsAlive;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

}
