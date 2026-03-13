package com.wavesenterprise.app.domain;
import java.util.Date;

public class Transfer {
    String senderAddress;
    String receiverAddress;
    double amount;
    long timeUntilItsAlive = new Date().getTime();
    boolean isActive;

    public Transfer(String senderAddress, String receiverAddress, double amount, long timeToKeepAlive){
        this.senderAddress = senderAddress;
        this.receiverAddress = receiverAddress;
        this.amount = amount;
        this.timeUntilItsAlive += 1000 * 5 * timeToKeepAlive; // 5 seconds for 1 "timeToKeepAlive"
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

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public long getTimeUntilItsAlive() {
        return timeUntilItsAlive;
    }

    public void setTimeUntilItsAlive(long timeUntilItsAlive) {
        this.timeUntilItsAlive = timeUntilItsAlive;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

}
