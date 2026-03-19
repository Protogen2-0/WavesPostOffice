import {useContext} from "react";
import {Context} from "../../core/context/Context.jsx";

export default async function fetchPost(params) {

    const {address, password, id, port} = useContext(Context);

    try{
        await fetch(`http://localhost:${port}/transactions/signAndBroadcast`, { // PAY ATTENTION TO PORT
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "contractId": id, // PAY ATTENTION TO CONTRACT ID
                "fee": 10,
                "sender": address, // PAY ATTENTION TO SENDER ADDRESS
                "password": password, // PAY ATTENTION TO SENDER PASSWORD
                "type": 104,
                "params": params,
                "version": 2,
                "contractVersion": 1
            })
        })
    }
    catch(e){
        console.warn(e)
    }
}