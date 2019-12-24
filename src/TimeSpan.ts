import { format } from "timeago.js";
import { dateFormat } from "./utils";

export class TimeSpan {
  private startTimeStamp = 0;

  private betweenTime: number; // 1分钟 24 分钟;

  private maxTimeago: number; // 1小时 24小时

  private language: string = "zh_CN";

  constructor(betweenTime = 1000 * 60, maxTimeago = 1000 * 60 * 60) {
    this.betweenTime = betweenTime;
    this.maxTimeago = maxTimeago;
  }

  format(timestamp?: number) {
    if (!timestamp) {
      return null;
    }
    let timeInfoNode = null;
    if (timestamp - this.startTimeStamp > this.betweenTime) {
      timeInfoNode =
        new Date().getTime() - timestamp < this.maxTimeago
          ? format(timestamp, this.language)
          : dateFormat(timestamp, "yyyy年MM月dd日 hh:mm");
    }
    this.startTimeStamp = timestamp;
    return timeInfoNode;
  }
}
