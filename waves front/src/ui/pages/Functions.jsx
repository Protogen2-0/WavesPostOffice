import Header from "../components/Header.jsx";
import ChangeName from "../components/contactMethods/ChangeName.jsx";
import ChangeDepartmentId from "../components/contactMethods/ChangeDepartmentId.jsx";
import ChangeAnotherUserRole from "../components/contactMethods/ChangeAnotherUserRole.jsx";
import ChangeHomeAddress from "../components/contactMethods/ChangeHomeAddress.jsx";
import SendTransfer from "../components/contactMethods/SendTransfer.jsx";
import AcceptOrRejectTransfer from "../components/contactMethods/AcceptOrRejectTransfer.jsx";
import SendPackage from "../components/contactMethods/SendPackage.jsx";
import IncreaseDeclaredValue from "../components/contactMethods/IncreaseDeclaredValue.jsx";
import AcceptOrRejectPackage from "../components/contactMethods/AcceptOrRejectPackage.jsx";
import {Tab, Tabs} from "react-bootstrap";
import {useContext} from "react";
import {Context} from "../../core/context/Context.jsx";
import Authorization from "./Authorization.jsx";
import Register from "../components/contactMethods/Register.jsx";

export default function Functions() {
    const{state} = useContext(Context);
    return (
        <>
            {state.length > 0 ?
                <>
                    <Header />
                    <Tabs
                        defaultActiveKey="Change personal info"
                        className="mb-3"
                        fill
                    >
                        <Tab eventKey="Register" title={"Register"}>
                            <Register/>
                        </Tab>
                        <Tab eventKey="Change personal info" title="Change personal info">
                            <ChangeName />
                            <ChangeHomeAddress/>
                        </Tab>
                        <Tab eventKey="Actions for employee" title="Actions for employee">
                            <IncreaseDeclaredValue/>
                        </Tab>
                        <Tab eventKey="Actions for admin" title="Actions for admin">
                            <ChangeDepartmentId/>
                            <ChangeAnotherUserRole/>
                        </Tab>
                        <Tab eventKey="Transfer actions" title="Transfer actions">
                            <SendTransfer/>
                            <AcceptOrRejectTransfer/>
                        </Tab>
                        <Tab eventKey="Package actions" title="Package actions">
                            <SendPackage/>
                            <IncreaseDeclaredValue/>
                            <AcceptOrRejectPackage/>
                        </Tab>
                    </Tabs>
                </>
                :
                <Authorization/>
            }

        </>
    )
}