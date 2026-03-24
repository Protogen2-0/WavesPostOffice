import {Form} from "react-router";
import {useContext} from "react";
import fetchPost from "../FetchPost.jsx";
import {Button, FormControl, FormLabel} from "react-bootstrap";
import {Context} from "../../../core/context/Context.jsx";

export default function SendTransfer() {

    const {address, password, id, port} = useContext(Context);

    const sendTransfer = async(Address, amount, timeToKeepAlive) => {
        await fetchPost(
            [
                {"type": "string","key": "action","value": "sendTransfer"},
                {"type": "string","key": "address","value": Address},
                {"type": "string","key": "amount","value": amount},
                {"type": "string","key": "timeToKeepAlive","value": timeToKeepAlive}
            ], address, password, id, port
        )
    }

    return(
        <Form className="container" onSubmit={async(e)=>{
            e.preventDefault();
            await sendTransfer(e.target[0].value, e.target[1].value, e.target[2].value);
        }}>
            <h2>отправка денежного перевода</h2>
            <FormLabel column={1}>укажите адрес получателя</FormLabel>
            <FormControl placeholder="498o7fcsadc412fg4124f2x"/>
            <FormLabel column={1}>укажите сумму</FormLabel>
            <FormControl placeholder="11.56" type="number" />
            <FormLabel column={1}>укажите время в течении которого получатель сможет принять/отказаться от перевода</FormLabel>
            <FormControl placeholder="615" type="number" />
            <Button type="submit" className="container">send transfer</Button>
        </Form>
    )
}