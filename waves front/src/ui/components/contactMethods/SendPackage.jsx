import {Form} from "react-router";
import {Button, FormControl, FormLabel} from "react-bootstrap";
import fetchPost from "../FetchPost.jsx";
import {useContext} from "react";
import {Context} from "../../../core/context/Context.jsx";

export function SendPackage() {

    const {address, password, id, port} = useContext(Context);

    const sendPackage = async (sendTo, sendFrom, type, receiver, packageClass, weight, canChangeCost, twoIndexes) => {
        await fetchPost(
            [
                {"type": "string", "key": "action", "value": "sendPackage"},
                {"type": "string", "key": "sendTo", "value": sendTo},
                {"type": "string", "key": "sendFrom", "value": sendFrom},
                {"type": "string", "key": "type", "value": type},
                {"type": "string", "key": "receiver", "value": receiver},
                {"type": "string", "key": "packageClass", "value": packageClass},
                {"type": "string", "key": "weight", "value": weight},
                {"type": "string", "key": "canChangeCost", "value": canChangeCost},
                {"type": "string", "key": "twoIndexes", "value": twoIndexes}
            ], address, password, id, port
        )
    }

    return (
        <Form className="container" onSubmit={async(e) => {
            e.preventDefault();
            await sendPackage(e.target[0].value, e.target[1].value, e.target[2].value,
                e.target[3].value, e.target[4].value, e.target[5].value,
                e.target[6].value, e.target[7].value);
        }}>
            <h2>отправление посылки</h2>
            <FormLabel column={1}>укажите адрес отправления</FormLabel>
            <FormControl placeholder="москва"/>
            <FormLabel column={1}>укажите адрес получения</FormLabel>
            <FormControl placeholder="москва"/>
            <FormLabel column={1}>укажите тип посылки(бандероль/письмо/посылка)</FormLabel>
            <FormControl placeholder="бандероль"/>
            <FormLabel column={1}>укажите адрес получателя</FormLabel>
            <FormControl placeholder="25306x246dsa2346v23a623"/>
            <FormLabel column={1}>укажите класс отправления(1,2,3)</FormLabel>
            <FormControl placeholder="1" type={"number"}/>
            <FormLabel column={1}>укажите вес отправления(не более 10кг)</FormLabel>
            <FormControl placeholder="3.6" type={"float"} max={10} min={0}/>
            <FormLabel column={1}>укажите, может ли сотрудник повысить цену</FormLabel>
            <FormControl placeholder="true" type={"boolean"}/>
            <FormLabel column={1}>укажите 2 индекса почтовых отделений</FormLabel>
            <FormControl placeholder="124388047191"/>
            <Button type="submit" className="container">send package</Button>
        </Form>
    )
}