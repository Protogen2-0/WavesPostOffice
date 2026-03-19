import {Form} from "react-router";
import {Button, FormControl, FormLabel} from "react-bootstrap";
import fetchPost from "../FetchPost.jsx";

export default function ChangeName() {


    // const {address, password, id, port} = useContext(Context);
    // async function fetchPost(params) {
    //     try{
    //         await fetch(`http://localhost:${port}/transactions/signAndBroadcast`, { // PAY ATTENTION TO PORT
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 "contractId": id, // PAY ATTENTION TO CONTRACT ID
    //                 "fee": 10,
    //                 "sender": address, // PAY ATTENTION TO SENDER ADDRESS
    //                 "password": password, // PAY ATTENTION TO SENDER PASSWORD
    //                 "type": 104,
    //                 "params": params,
    //                 "version": 2,
    //                 "contractVersion": 1
    //             })
    //         })
    //         alert("success")
    //     }
    //     catch(e){
    //         console.warn(e)
    //         alert("go you dick")
    //     }
    // }

    const changeName = async(name) => {
        await fetchPost(
            [
                {"type": "string","key": "action","value": "changeName"},
                {"type": "string","key": "name","value": name}
            ]
        )
    }

    return(
        <Form className="container" onSubmit={(e)=>{
            e.preventDefault();
            changeName(e.target[0].value);
        }}>
            <h2>смена имени</h2>
            <FormLabel column={1}>укажите новое имя</FormLabel>
            <FormControl placeholder="VASILIY"/>
            <Button type="submit" className="container">Change Name</Button>
        </Form>
    )
}