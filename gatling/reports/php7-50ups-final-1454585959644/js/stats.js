var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "755",
        "ok": "702",
        "ko": "53"
    },
    "minResponseTime": {
        "total": "253",
        "ok": "253",
        "ko": "55375"
    },
    "maxResponseTime": {
        "total": "67010",
        "ok": "63596",
        "ko": "67010"
    },
    "meanResponseTime": {
        "total": "31472",
        "ok": "29294",
        "ko": "60319"
    },
    "standardDeviation": {
        "total": "18754",
        "ok": "17622",
        "ko": "1594"
    },
    "percentiles1": {
        "total": "27512",
        "ok": "26216",
        "ko": "60011"
    },
    "percentiles2": {
        "total": "49055",
        "ok": "43731",
        "ko": "61009"
    },
    "percentiles3": {
        "total": "60011",
        "ok": "59006",
        "ko": "63011"
    },
    "percentiles4": {
        "total": "62426",
        "ok": "61064",
        "ko": "64930"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 686,
        "percentage": 91
    },
    "group4": {
        "name": "failed",
        "count": 53,
        "percentage": 7
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "9.172",
        "ok": "8.528",
        "ko": "0.644"
    }
},
contents: {
"req_yesitis-02594": {
        type: "REQUEST",
        name: "yesitis",
path: "yesitis",
pathFormatted: "req_yesitis-02594",
stats: {
    "name": "yesitis",
    "numberOfRequests": {
        "total": "755",
        "ok": "702",
        "ko": "53"
    },
    "minResponseTime": {
        "total": "253",
        "ok": "253",
        "ko": "55375"
    },
    "maxResponseTime": {
        "total": "67010",
        "ok": "63596",
        "ko": "67010"
    },
    "meanResponseTime": {
        "total": "31472",
        "ok": "29294",
        "ko": "60319"
    },
    "standardDeviation": {
        "total": "18754",
        "ok": "17622",
        "ko": "1594"
    },
    "percentiles1": {
        "total": "27512",
        "ok": "26216",
        "ko": "60011"
    },
    "percentiles2": {
        "total": "49055",
        "ok": "43731",
        "ko": "61009"
    },
    "percentiles3": {
        "total": "60011",
        "ok": "59006",
        "ko": "63011"
    },
    "percentiles4": {
        "total": "62426",
        "ok": "61064",
        "ko": "64930"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 686,
        "percentage": 91
    },
    "group4": {
        "name": "failed",
        "count": 53,
        "percentage": 7
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "9.172",
        "ok": "8.528",
        "ko": "0.644"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
