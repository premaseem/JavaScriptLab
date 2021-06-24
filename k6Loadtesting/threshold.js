import http from 'k6/http';
import { check, sleep } from 'k6';

// export let options = {
//     stages: [
//         { duration: '5s', target: 20 },
//         { duration: '5s', target: 10 },
//         { duration: '5s', target: 0 },
//     ],
// };
export let options = {
    thresholds: {
        http_req_failed: ['rate<0.01'],   // http errors should be less than 1%
        // 90% of requests must finish within 400ms, 95% within 800, and 99.9% within 2s.
        http_req_duration: ['p(90) < 400', 'p(95) < 800', 'p(99.9) < 2000']
    }
    ,
    stages: [
        { duration: '5s', target: 20 }
    ]
};

export default function () {
    http.get('https://test-api.k6.io/public/crocodiles/1/');
}
