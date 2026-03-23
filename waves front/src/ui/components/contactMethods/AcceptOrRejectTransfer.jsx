import {Context} from "../../../core/context/Context.jsx";
import {useContext} from "react";
import fetchPost from "../FetchPost.jsx";
import {Form} from "react-router";
import {Button, FormControl, FormLabel} from "react-bootstrap";

export default function AcceptOrRejectTransfer() {

    const {address, password, id, port} = useContext(Context);

    const acceptOrRejectTransfer = async(Id, wantToAccept) => {
        await fetchPost(
            [
                {"type": "string","key": "action","value": "acceptOrRejectTransfer"},
                {"type": "string","key": "id","value": Id},
                {"type": "boolean","key": "wantToAccept","value": wantToAccept}
            ], address, password, id, port
        )
    }

    return(
        <Form className="container" onSubmit={async(e)=>{
            e.preventDefault();
            await acceptOrRejectTransfer(e.target[0].value, e.target[1].value.toLowerCase() === "true");
        }}>
            <h2>принятие или отказ от денежного перевода</h2>
            <FormLabel column={1}>укажите id перевода</FormLabel>
            <FormControl placeholder="RR4221634128457125"/>
            <FormLabel column={1}>укажите, хотите ли вы забрать эти деньги(true/false)</FormLabel>
            <FormControl placeholder="true" type={"boolean"}/>
            <Button type="submit" className="container">accept or reject transfer</Button>
        </Form>
    )
}