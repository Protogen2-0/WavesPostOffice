await fetch("http://localhost:6882/transactions/signAndBroadcast", {
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
                           "type": 103,
                           "version": 2,
                           "sender": "3NsBJbQvU4RArJ3NnmaLge4y4KbHcnh5EDJ", // account address
                           "password": "czNQXN1DO5BCh8PHYYk6qw", // account password
                           "image": "registry.hub.docker.com/protogen2/waves:4.4.4", // PAY ATTENTION TO VERSION
                           "contractName": "Contract4.4.4",
                           "imageHash": "3e30e90acd489aa677c03a8c7bede0d821ae4648ee668728453d60b9d155ac81", // PAY ATTENTION TO HASH
                           "params": [
                             {
                               "type": "string",
                               "key": "action",
                               "value": "init"
                             }
                           ],
                           "fee": 100000000,
                           "timestamp": Date.now(),
                           "feeAssetId": null
                         }
    )
})
.then(async response => await response.json())
.then(data => console.log(data))