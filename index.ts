import './style.css';
import { of, map, Observable } from 'rxjs';
function timeout(millisecond) {
  return new Promise((successFn) => {
    setTimeout(() => {
      successFn('Data');
    }, millisecond);
  });
}
timeout(1000).then((data) => {
  console.log('data', data);
}); // Open the console in the bottom right to see results.
