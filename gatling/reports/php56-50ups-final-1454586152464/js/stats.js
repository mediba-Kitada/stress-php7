var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "755",
        "ok": "755",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "24",
        "ok": "24",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3850",
        "ok": "3850",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1244",
        "ok": "1244",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1027",
        "ok": "1027",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1088",
        "ok": "1088",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2248",
        "ok": "2248",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2967",
        "ok": "2967",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3316",
        "ok": "3316",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 311,
        "percentage": 41
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 91,
        "percentage": 12
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 353,
        "percentage": 47
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "33.434",
        "ok": "33.434",
        "ko": "-"
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
        "ok": "755",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "24",
        "ok": "24",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3850",
        "ok": "3850",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1244",
        "ok": "1244",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1027",
        "ok": "1027",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1088",
        "ok": "1088",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2248",
        "ok": "2248",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2967",
        "ok": "2967",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3316",
        "ok": "3316",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 311,
        "percentage": 41
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 91,
        "percentage": 12
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 353,
        "percentage": 47
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "33.434",
        "ok": "33.434",
        "ko": "-"
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
