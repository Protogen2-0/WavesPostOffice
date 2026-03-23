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
                {"type": "integer","key": "amount","value": amount},
                {"type": "integer","key": "timeToKeepAlive","value": timeToKeepAlive}
            ], address, password, id, port
        )
    }

    return(
        <Form className="container" onSubmit={async(e)=>{
            e.preventDefault();
            console.log(
                [
                    {"type": "string","key": "action","value": "sendTransfer"},
                    {"type": "string","key": "address","value": e.target[0].value},
                    {"type": "integer","key": "amount","value": Number(e.target[1].value)},
                    {"type": "integer","key": "timeToKeepAlive","value":  Number(e.target[2].value)}
                ], address, password, id, port);
            await sendTransfer(e.target[0].value, Number(e.target[1].value), Number(e.target[2].value));
        }}>
            <h2>отправка денежного перевода</h2>
            <FormLabel column={1}>укажите адрес получателя</FormLabel>
            <FormControl placeholder="498o7fcsadc412fg4124f2x" type={"address"}/>
            <FormLabel column={1}>укажите сумму</FormLabel>
            <FormControl placeholder="11.56"/>
            <FormLabel column={1}>укажите время в течении которого получатель сможет принять/отказаться от перевода</FormLabel>
            <FormControl placeholder="615"/>
            <Button type="submit" className="container">send transfer</Button>
        </Form>
    )
}