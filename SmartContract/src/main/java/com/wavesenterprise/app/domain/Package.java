package com.wavesenterprise.app.domain;

public class Package {

    String sendTo;
    String sendFrom;
    String trackNum;
    String Type;
    String sender;
    String receiver;
    int packageClass;
    int deliveryTime;
    double deliveryCost;
    double weight;
    double declaredValue;
    double totalCost;
    boolean isActive;
    boolean canChangeCost;
    
    public Package(String sendTo, String sendFrom, String Type, String trackNum, String sender, String receiver, int packageClass, double weight, boolean canChangeCost){
        this.sendTo = sendTo;
        this.sendFrom = sendFrom;
        this.trackNum = trackNum;
        this.Type = Type;
        this.sender = sender;
        this.receiver = receiver;
        this.packageClass = packageClass;
        this.deliveryTime = packageClass == 1 ? 5 : (packageClass == 2 ? 10 : 15);
        this.deliveryCost = ( packageClass == 1 ? 0.5 : (packageClass == 2 ? 0.3 : 0.1) ) * weight;
        this.weight = weight;
        this.canChangeCost = canChangeCost;
        this.totalCost = deliveryCost * weight + declaredValue * 0.1;
        this.isActive = true;
    }

    public String getSendTo() {
        return sendTo;
    }

    public void setSendTo(String sendTo) {
        this.sendTo = sendTo;
    }

    public String getSendFrom() {
        return sendFrom;
    }

    public void setSendFrom(String sendFrom) {
        this.sendFrom = sendFrom;
    }

    public String getTrackNum() {
        return trackNum;
    }

    public void setTrackNum(String trackNum) {
        this.trackNum = trackNum;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getType() {
        return Type;
    }

    public void setType(String type) {
        Type = type;
    }

    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public int getPackageClass() {
        return packageClass;
    }

    public void setPackageClass(int packageClass) {
        this.packageClass = packageClass;
    }

    public int getDeliveryTime() {
        return deliveryTime;
    }

    public void setDeliveryTime(int deliveryTime) {
        this.deliveryTime = deliveryTime;
    }

    public double getDeliveryCost() {
        return deliveryCost;
    }

    public void setDeliveryCost(double deliveryCost) {
        this.deliveryCost = deliveryCost;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public double getDeclaredValue() {
        return declaredValue;
    }

    public void setDeclaredValue(double declaredValue) {
        this.declaredValue = declaredValue;
    }

    public double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(double totalCost) {
        this.totalCost = totalCost;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }
}
