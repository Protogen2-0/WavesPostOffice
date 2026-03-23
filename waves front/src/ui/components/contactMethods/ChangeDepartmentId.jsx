import {useContext} from "react";
import {Context} from "../../../core/context/Context.jsx";
import fetchPost from "../FetchPost.jsx";
import {Form} from "react-router";
import {Button, FormControl, FormLabel} from "react-bootstrap";

export default function ChangeDepartmentId() {

    const {address, password, id, port} = useContext(Context);

    const changeDepartmentId = async(Address, departmentId) => {
        await fetchPost(
            [
                {"type": "string","key": "action","value": "changeDepartmentId"},
                {"type": "string","key": "address","value": Address},
                {"type": "string","key": "departmentId","value": departmentId}
            ], address, password, id, port
        )
    }

    return(
        <Form className="container" onSubmit={async(e)=>{
            e.preventDefault();
            await changeDepartmentId(e.target[0].value, e.target[1].value);
        }}>
            <h2>смена id отделения у сотрудника</h2>
            <FormLabel column={1}>укажите адрес сотрудника</FormLabel>
            <FormControl placeholder="23sz1231234xfd2z421"/>
            <FormLabel column={1} type={"address"}>укажите новый id</FormLabel>
            <FormControl placeholder="RR415274"/>
            <Button type="submit" className="container">Change department id</Button>
        </Form>
    )
}