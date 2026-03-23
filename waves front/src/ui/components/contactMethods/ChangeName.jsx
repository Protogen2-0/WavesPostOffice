import {Form} from "react-router";
import {Button, FormControl, FormLabel} from "react-bootstrap";
import fetchPost from "../FetchPost.jsx";
import {useContext} from "react";
import {Context} from "../../../core/context/Context.jsx";

export function ChangeName() {

    const {address, password, id, port} = useContext(Context);

    const changeName = async (name) => {
        await fetchPost(
            [
                {"type": "string", "key": "action", "value": "changeName"},
                {"type": "string", "key": "name", "value": name}
            ], address, password, id, port
        )
    }

    return (
        <Form className="container" onSubmit={async(e) => {
            e.preventDefault();
            await changeName(e.target[0].value);
        }}>
            <h2>смена имени</h2>
            <FormLabel column={1}>укажите новое имя</FormLabel>
            <FormControl placeholder="VASILIY"/>
            <Button type="submit" className="container">Change Name</Button>
        </Form>
    )
}