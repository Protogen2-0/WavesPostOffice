import {Form} from "react-router";
import {Button, FormControl, FormLabel} from "react-bootstrap";
import fetchPost from "../FetchPost.jsx";
import {useContext} from "react";
import {Context} from "../../../core/context/Context.jsx";

export default function Register() {

    const {address, password, id, port} = useContext(Context);

    const register = async (name, Address) => {
        await fetchPost(
            [
                {"type": "string", "key": "action", "value": "register"},
                {"type": "string", "key": "name", "value": name},
                {"type": "string", "key": "address", "value": Address}
            ], address, password, id, port
        )
    }

    return (
        <Form className="container" onSubmit={async(e) => {
            e.preventDefault();
            await register(e.target[0].value, e.target[1].value);
        }}>
            <h2>регистрация</h2>
            <FormLabel column={1}>укажите имя пользователя</FormLabel>
            <FormControl placeholder="VASILIY"/>
            <FormLabel column={1}>укажите домашний адрес</FormLabel>
            <FormControl placeholder="MOSCOW"/>
            <Button type="submit" className="container">Change Name</Button>
        </Form>
    )
}