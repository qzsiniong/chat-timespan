## TypeScript Library

## The Problem

## This Solution

## Install

```sh
  yarn add chat-timespan
```

## Usage

```typescript
import TimeSpan from "chat-timespan";

const timeSpan = new TimeSpan();

timeSpan.format(new Date("2019-12-01 08:08:08").getTime()) // 2019年12月01日 08:08
timeSpan.format(Date.now() - 1000 * 60 * 60 * 2) // 2 小时前
timeSpan.format(Date.now() - 1000 * 60 * 5) // 5 分钟前
timeSpan.format(Date.now() - (1000 * 60 * 5 + 1000)) // null
timeSpan.format(Date.now() - 1000 * 60 * 2) // 2 分钟前
timeSpan.format(Date.now()) // 刚刚
```

## API

### Input :

- timestamp: number | undefined // 时间戳

### Output :

c : number | null // 时间字符串
