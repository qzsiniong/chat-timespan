import TimeSpan from "../index";
import { dateFormat } from "../utils";

function fn(timeSpan: TimeSpan,timestamp:number) {
  const span = timeSpan.format(timestamp);
  console.log(span);
  return expect(span);
}

const SECONDS = 1000;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 60;
const DAYS = HOURS * 24;
const FORMAT = "yyyy年MM月dd日 hh:mm";

describe("sum", () => {
  test("exports", () => {

    const timeSpan = new TimeSpan();
    const now = Date.now();
    let timestamp = 0;
    let span = null;

    

    timestamp = now - 2 * DAYS;
    fn(timeSpan, timestamp).toEqual(dateFormat(timestamp, FORMAT));
    
    timestamp = now - 1 * DAYS - 1 * HOURS;
    fn(timeSpan, timestamp).toEqual(dateFormat(timestamp, FORMAT));

    
    timestamp = now - 1 * HOURS;
    fn(timeSpan, timestamp).toEqual(dateFormat(timestamp, FORMAT));

    timestamp = now - 59 * MINUTES;
    fn(timeSpan, timestamp).toBeNull();

    timestamp = now - 50 * MINUTES;
    fn(timeSpan, timestamp).toEqual("50 分钟前");

    timestamp = now - 49 * MINUTES + 1 * SECONDS;
    fn(timeSpan, timestamp).toEqual("48 分钟前");

    timestamp = now - 1 * SECONDS;
    fn(timeSpan, timestamp).toEqual("刚刚");

    
  });
  test("刚刚", () => {
    const now = Date.now();
    let timestamp = 0;

    for (let i = 0; i < 10; i++) {
      timestamp = now - i * SECONDS;
      fn(new TimeSpan(), timestamp).toEqual("刚刚");
    }
  });

  test("秒", () => {
    const now = Date.now();
    let timestamp = 0;

    for (let i = 10; i < 60; i++) {
      timestamp = now - i * SECONDS;
      fn(new TimeSpan(), timestamp).toEqual(`${i} 秒前`);
    }
  });

  test("分", () => {
    const now = Date.now();
    let timestamp = 0;

    for (let i = 1; i < 60; i++) {
      timestamp = now - i * MINUTES;
      fn(new TimeSpan(), timestamp).toEqual(`${i} 分钟前`);
    }
  });
});
