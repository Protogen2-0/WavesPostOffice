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
                           "image": "registry.hub.docker.com/protogen2/waves:5.0.0", // PAY ATTENTION TO VERSION
                           "contractName": "Contract5.0.0",
                           "imageHash": "e8bafc0416ead0c5906dc067bc8839c2efbf0f71849c8c4c8eb2860cad123614", // PAY ATTENTION TO HASH
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