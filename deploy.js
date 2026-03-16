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
                           "image": "registry.hub.docker.com/protogen2/waves:4.3.3", // PAY ATTENTION TO VERSION
                           "contractName": "Contract4.3.3",
                           "imageHash": "57c1665dd39ebfa62b5f22e7b8a1ad5c53de5f84598c183ca8c59cd3ac551630", // PAY ATTENTION TO HASH
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
.then(response => response.json)
.then(data => console.log(data))