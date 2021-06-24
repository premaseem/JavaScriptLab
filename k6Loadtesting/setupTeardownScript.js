import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '5s', target: 20 },
        { duration: '5s', target: 10 },
        { duration: '5s', target: 0 },
    ],
};

export function setup() {
    let res = http.get('https://httpbin.org/get');
    return { data: res.json() };
}

export default function (data) {
    let res = http.get('https://httpbin.org/');
    let res2 = http.get('https://test.k6.io/');
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
    check(res2, { 'status was 200': (r) => r.status == 200 });
    // console.log("prining")
    console.log(JSON.stringify(data));
}

export function teardown(data) {
    console.log(JSON.stringify(data));
}

