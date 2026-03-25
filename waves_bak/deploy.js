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
                           "image": "registry.hub.docker.com/protogen2/waves:5.2.0", // PAY ATTENTION TO VERSION
                           "contractName": "Contract5.2.0",
                           "imageHash": "c3d894abcf8962904de9a61c27fcad62450fc4ac83574dbaa7ce1aaa4752e428", // PAY ATTENTION TO HASH
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