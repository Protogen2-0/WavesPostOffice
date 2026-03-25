import {Context} from "../../../core/context/Context.jsx";
import {useContext} from "react";
import fetchPost from "../FetchPost.jsx";
import {Form} from "react-router";
import {Button, FormControl, FormLabel} from "react-bootstrap";

export default function AcceptOrRejectPackage() {

    const {address, password, id, port} = useContext(Context);

    const acceptOrRejectPackage = async(Id, wantToAccept) => {
        await fetchPost(
            [
                {"type": "string","key": "action","value": "acceptOrRejectPackage"},
                {"type": "string","key": "id","value": Id},
                {"type": "string","key": "wantToAccept","value": wantToAccept}
            ], address, password, id, port
        )
    }

    return(
        <Form className="container" onSubmit={async(e)=>{
            e.preventDefault();
            await acceptOrRejectPackage(e.target[0].value, e.target[1].value);
        }}>
            <h2>принятие или отказ посылки</h2>
            <FormLabel column={1}>укажите id отправления</FormLabel>
            <FormControl placeholder="RR4221634128457125"/>
            <FormLabel column={1}>укажите, хотите ли вы принять посылку(true/false)</FormLabel>
            <FormControl placeholder="true"/>
            <Button type="submit" className="container">accept or reject transfer</Button>
        </Form>
    )
}