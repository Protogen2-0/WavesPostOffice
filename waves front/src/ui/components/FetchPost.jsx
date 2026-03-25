export default async function fetchPost(params, address, password, id, port) {
    console.log(`params :`, params);
    console.log(`address : ${address}`);
    console.log(`password : ${password}`);
    console.log(`id : ${id}`);
    console.log(`port : ${port}`);
    try {
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
            .then(async(res)=>console.log(await res.json()))
    }
    catch (error) {
        console.warn(error)
    }
}