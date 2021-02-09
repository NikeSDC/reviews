import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 100 },
    { duration: '10s', target: 1000 },
    { duration: '50s', target: 1500 },
  ],
}

export default function () {
  http.get('http://localhost:3003/api/reviews/highest10');
  sleep(1);
}