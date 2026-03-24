import {Form} from "react-router";
import {Button, FormControl, FormLabel} from "react-bootstrap";
import fetchPost from "../FetchPost.jsx";
import {useContext} from "react";
import {Context} from "../../../core/context/Context.jsx";

export function IncreaseDeclaredValue() {

    const {address, password, id, port} = useContext(Context);

    const increaseDeclaredValue = async (trackNum, amount) => {
        await fetchPost(
            [
                {"type": "string", "key": "action", "value": "increaseDeclaredValue"},
                {"type": "string", "key": "trackNum", "value": trackNum},
                {"type": "string", "key": "amount", "value": amount}
            ], address, password, id, port
        )
    }

    return (
        <Form className="container" onSubmit={async(e) => {
            e.preventDefault();
            await increaseDeclaredValue(e.target[0].value, e.target[1].value);
        }}>
            <h2>повышение обьявленной стоимости посылки(только для сотрудника)</h2>
            <FormLabel column={1}>укажите трек номер</FormLabel>
            <FormControl placeholder="RR2143712945713415"/>
            <FormLabel column={1}>укажите новую стоимость</FormLabel>
            <FormControl placeholder="0.1" type={"float"} min={0}/>
            <Button type="submit" className="container">Change declared value</Button>
        </Form>
    )
}