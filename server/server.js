var express = require('express');
var app = express();
var cors = require('cors');
var util = require('./Utils')


app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}));


app.get('/', function (req, res) {
    res.json({
        "response": [
            {
                "id": 0,
                "realStateStatus": "new",
                "realStateImg": "https://picsum.photos/300/225/?image=829",
                "realStateAgencyImg": "https://picsum.photos/100/52/?image=839",
                "realStateUploadTime": "Uploaded 5 days ago",
                "realStateName": "New Amazing random thing #1",
                "realStatePrice": 387000,
                "realStateTag": [{ "id": 0, "name": "tags x" }, { "id": 0, "name": "tags x" }]
            },
            {
                "id": 0,
                "realStateStatus": false,
                "realStateImg": "https://picsum.photos/300/225/?image=829",
                "realStateAgencyImg": "https://picsum.photos/100/52/?image=839",
                "realStateUploadTime": "Uploaded 5 days ago",
                "realStateName": "New Amazing random thing #1",
                "realStatePrice": 387000,
                "realStateTag": [{ "id": 0, "name": "tags x" }, { "id": 0, "name": "tags x" }]
            },
            {
                "id": 0,
                "realStateStatus": "new",
                "realStateImg": "https://picsum.photos/300/225/?image=829",
                "realStateAgencyImg": "https://picsum.photos/100/52/?image=839",
                "realStateUploadTime": "Uploaded 5 days ago",
                "realStateName": "New Amazing random thing #1",
                "realStatePrice": 387000,
                "realStateTag": [{ "id": 0, "name": "tags x" }, { "id": 0, "name": "tags x" }]
            },
            {
                "id": 0,
                "realStateStatus": "new",
                "realStateImg": "https://picsum.photos/300/225/?image=829",
                "realStateAgencyImg": "https://picsum.photos/100/52/?image=839",
                "realStateUploadTime": "Uploaded 5 days ago",
                "realStateName": "New Amazing random thing #1",
                "realStatePrice": 387000,
                "realStateTag": [{ "id": 0, "name": "tags x" }, { "id": 0, "name": "tags x" }]
            },
            {
                "id": 0,
                "realStateStatus": "new",
                "realStateImg": "https://picsum.photos/300/225/?image=829",
                "realStateAgencyImg": "https://picsum.photos/100/52/?image=839",
                "realStateUploadTime": "Uploaded 5 days ago",
                "realStateName": "New Amazing random thing #1",
                "realStatePrice": 387000,
                "realStateTag": [{ "id": 0, "name": "tags x" }, { "id": 0, "name": "tags x" }]
            },
            {
                "id": 0,
                "realStateStatus": "new",
                "realStateImg": "https://picsum.photos/300/225/?image=829",
                "realStateAgencyImg": "https://picsum.photos/100/52/?image=839",
                "realStateUploadTime": "Uploaded 5 days ago",
                "realStateName": "New Amazing random thing #1",
                "realStatePrice": 387000,
                "realStateTag": [{ "id": 0, "name": "tags x" }, { "id": 0, "name": "tags x" }]
            }
        ],
        "total": 18,
        "limit": 10,
        "nextPage": true,
        "previousPage": false,
        "actualPage": 0
    })
});

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

app.get('/real-state-list/1', function (req, res) {
    let arr = []

    for (let i = 0; i < 6; i++) {
        let randomNUmWidth = Math.round(getRandomArbitrary(200, 300))
        let randomNumHeight = Math.round(getRandomArbitrary(125, 225))
        let randomTagNum = Math.round(getRandomArbitrary(1, 40))
        let status = ((i% 2) === 0) ? "new" : "old";
        
        arr = [...arr, {
            "id": i,
            "realStateStatus": status,
            "realStateImg": `https://picsum.photos/${randomNUmWidth}/${randomNumHeight}/?image=${(i * 3) + 5}`,
            "realStateAgencyImg": `https://picsum.photos/100/52/?image=${(i * 3) + 15}`,
            "realStateUploadTime": `Uploaded ${i*2} hours ago`,
            "realStateName": `New Amazing random thing #${i+1}`,
            "realStatePrice": 387000,
            "realStateTag": [{ "id": 0, "name": `tags ${randomTagNum}` }, { "id": 0, "name": `tags ${randomTagNum}` }]
        }]
    }

    res.json({
        "status": 200,
        "response": {
            "list": arr,
            "total": 20,
            "start": 0,
            "limit": 10,
            "nextPage": true,
            "previousPage": false,
            "actualPage": 1
        }
    })    
});

app.get('/real-state-list/2', function (req, res) {
    res.json({
        "status": 200,
        "response": {
            "list": [
                {
                    "id": 0,
                    "realStateStatus": "old",
                    "realStateImg": "https://picsum.photos/250/200/?image=829",
                    "realStateAgencyImg": "https://picsum.photos/100/52/?image=839",
                    "realStateUploadTime": "Uploaded 5 days ago",
                    "realStateName": " Amazing random thing #111",
                    "realStatePrice": 387000,
                    "realStateTag": [{ "id": 0, "name": "tags x" }, { "id": 0, "name": "tags x" }]
                },
                {
                    "id": 0,
                    "realStateStatus": "old",
                    "realStateImg": "https://picsum.photos/250/200/?image=829",
                    "realStateAgencyImg": "https://picsum.photos/100/52/?image=839",
                    "realStateUploadTime": "Uploaded 5 days ago",
                    "realStateName": "New Amazing random thing #12",
                    "realStatePrice": 387000,
                    "realStateTag": [{ "id": 0, "name": "tags x" }, { "id": 0, "name": "tags x" }]
                },
                {
                    "id": 0,
                    "realStateStatus": "new",
                    "realStateImg": "https://picsum.photos/250/200/?image=829",
                    "realStateAgencyImg": "https://picsum.photos/100/52/?image=839",
                    "realStateUploadTime": "Uploaded 5 days ago",
                    "realStateName": "New Amazing random thing #13",
                    "realStatePrice": 387000,
                    "realStateTag": [{ "id": 0, "name": "tags x" }, { "id": 0, "name": "tags x" }]
                },
                {
                    "id": 0,
                    "realStateStatus": "new",
                    "realStateImg": "https://picsum.photos/300/200/?image=829",
                    "realStateAgencyImg": "https://picsum.photos/100/52/?image=839",
                    "realStateUploadTime": "Uploaded 5 days ago",
                    "realStateName": "New Amazing random thing #14",
                    "realStatePrice": 387000,
                    "realStateTag": [{ "id": 0, "name": "tags x" }, { "id": 0, "name": "tags x" }]
                },
                {
                    "id": 0,
                    "realStateStatus": "new",
                    "realStateImg": "https://picsum.photos/300/225/?image=829",
                    "realStateAgencyImg": "https://picsum.photos/100/52/?image=839",
                    "realStateUploadTime": "Uploaded 5 days ago",
                    "realStateName": "New Amazing random thing #15",
                    "realStatePrice": 387000,
                    "realStateTag": [{ "id": 0, "name": "tags x" }, { "id": 0, "name": "tags x" }]
                },
                {
                    "id": 0,
                    "realStateStatus": "new",
                    "realStateImg": "https://picsum.photos/300/225/?image=829",
                    "realStateAgencyImg": "https://picsum.photos/100/52/?image=839",
                    "realStateUploadTime": "Uploaded 5 days ago",
                    "realStateName": "New Amazing random thing #16",
                    "realStatePrice": 387000,
                    "realStateTag": [{ "id": 0, "name": "tags x" }, { "id": 0, "name": "tags x" }]
                }
            ],
            "total": 12,
            "start": 6,
            "limit": 6,
            "nextPage": false,
            "previousPage": true,
            "actualPage": 2
        }
    })
});

app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});