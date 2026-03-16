await fetch("http://localhost:6872/transactions/signAndBroadcast", { // PAY ATTENTION TO PORT
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
                             "contractId": "Dj4eAX6gpXAVBU8NUHQkQRvuGRz3J86wBUor41zxPeJo", // PAY ATTENTION TO CONTRACT ID
                             "fee": 10,
                             "sender": "3NgZesy9RTcCvqJ5B3KU2R3fyYQcxQRm6fF", // PAY ATTENTION TO SENDER ADDRESS
                             "password": "Fe4rQbWcECJ7vzIQ2hXh5w", // PAY ATTENTION TO SENDER PASSWORD
                             "type": 104,
                             "params":
                             [
                                 {
                                    "type": "string",
                                    "key": "action",
                                    "value": "changeName"
                                 },
                                 {
                                    "type": "string",
                                    "key": "name",
                                    "value": "Петров Петр Петрович(asfd;hjsadhfjkgasdfkhj)"
                                 }
                             ],
                             "version": 2,
                             "contractVersion": 1
                         })
})