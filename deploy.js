await fetch("http://localhost:6882/transactions/signAndBroadcast", {
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
                           "type": 103,
                           "version": 2,
                           "sender": "3NsBJbQvU4RArJ3NnmaLge4y4KbHcnh5EDJ",
                           "password": "czNQXN1DO5BCh8PHYYk6qw",
                           "image": "registry.hub.docker.com/protogen2/waves:4.2.0",
                           "contractName": "Contract4.2",
                           "imageHash": "a5eae20f42d2cfcdea0e75540dfc3353c183e7604703d96b0cb32bb97fcdebac",
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