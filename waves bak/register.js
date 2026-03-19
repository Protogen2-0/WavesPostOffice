await fetch("http://localhost:6872/transactions/signAndBroadcast", { // PAY ATTENTION TO PORT
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
                             "contractId": "95vyQTVijL51b9vzrKUNComoQkca2MhzkcmfgNcKwxsV", // PAY ATTENTION TO CONTRACT ID
                             "fee": 10,
                             "sender": "3NgZesy9RTcCvqJ5B3KU2R3fyYQcxQRm6fF", // PAY ATTENTION TO SENDER ADDRESS
                             "password": "Fe4rQbWcECJ7vzIQ2hXh5w", // PAY ATTENTION TO SENDER PASSWORD
                             "type": 104,
                             "params":
                             [
                                 {
                                    "type": "string",
                                    "key": "action",
                                    "value": "register"
                                 },
                                 {
                                    "type": "string",
                                    "key": "name",
                                    "value": "ivanasdadsadsadsadad"
                                 },
                                 {
                                     "type": "string",
                                     "key": "homeAddress",
                                     "value": "POLSKA"
                                 }
                             ],
                             "version": 2,
                             "contractVersion": 1
                         })
})