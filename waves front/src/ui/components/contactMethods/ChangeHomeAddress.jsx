import {Button, FormControl, FormLabel} from "react-bootstrap";
import {useContext} from "react";
import fetchPost from "../FetchPost.jsx";
import {Form} from "react-router";
import {Context} from "../../../core/context/Context.jsx";

export default function ChangeHomeAddress() {

    const {address, password, id, port} = useContext(Context);

    const changeHomeAddress = async(homeAddress) => {
        await fetchPost(
            [
                {"type": "string","key": "action","value": "changeHomeAddress"},
                {"type": "string","key": "homeAddress","value": homeAddress}
            ], address, password, id, port
        )
    }

    return(
        <Form className="container" onSubmit={async(e)=>{
            e.preventDefault();
            await changeHomeAddress(e.target[0].value);
        }}>
            <h2>смена домашнего адреса</h2>
            <FormLabel column={1}>укажите новый адрес</FormLabel>
            <FormControl placeholder="Питер"/>
            <Button type="submit" className="container">Change home address</Button>
        </Form>
    )
}