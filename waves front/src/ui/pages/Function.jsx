import Header from "../components/header/Header.jsx";
import {ChangeName} from "../components/contactMethods/ChangeName.jsx";
import ChangeDepartmentId from "../components/contactMethods/ChangeDepartmentId.jsx";
import ChangeAnotherUserRole from "../components/contactMethods/ChangeAnotherUserRole.jsx";
import ChangeHomeAddress from "../components/contactMethods/ChangeHomeAddress.jsx";
import SendTransfer from "../components/contactMethods/SendTransfer.jsx";
import AcceptOrRejectTransfer from "../components/contactMethods/AcceptOrRejectTransfer.jsx";
import {SendPackage} from "../components/contactMethods/SendPackage.jsx";
import {IncreaseDeclaredValue} from "../components/contactMethods/IncreaseDeclaredValue.jsx";

export default function Functions() {
    return (
        <>
            <Header />
            <ChangeName />
            <ChangeHomeAddress/>
            <ChangeDepartmentId/>
            <ChangeAnotherUserRole/>
            <SendTransfer/>
            <AcceptOrRejectTransfer/>
            <SendPackage/>
            <IncreaseDeclaredValue/>
        </>
    )
}