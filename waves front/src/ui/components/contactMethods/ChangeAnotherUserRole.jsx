import {useContext} from "react";
import {Context} from "../../../core/context/Context.jsx";
import fetchPost from "../FetchPost.jsx";
import {Form} from "react-router";
import {Button, FormControl, FormLabel} from "react-bootstrap";

export default function ChangeAnotherUserRole() {

    const {address, password, id, port} = useContext(Context);

    const changeAnotherUserRole = async(role, Address) => {
        await fetchPost(
            [
                {"type": "string","key": "action","value": "changeAnotherUserRole"},
                {"type": "string","key": "role","value": role},
                {"type": "string","key": "address","value": Address}
            ], address, password, id, port
        )
    }

    return(
        <Form className="container" onSubmit={async(e)=>{
            e.preventDefault();
            await changeAnotherUserRole(e.target[0].value, e.target[1].value);
        }}>
            <h2>смена роли другого пользователя</h2>
            <FormLabel column={1}>укажите новую роль (user, employee)</FormLabel>
            <FormControl placeholder="user"/>
            <FormLabel column={1}>укажите адрес пользователя</FormLabel>
            <FormControl placeholder="g43fx21fd4x214cx2134"/>
            <Button type="submit" className="container">Change role</Button>
        </Form>
    )
}