---
order: 0
title: 
  zh-CN: 基本用法
  en-US: Basic
---

## zh-CN

基本的时间轴。

## en-US 

Basic timeline.

```` html
<template>
  <atu-timeline>
    <atu-timeline-item>Create a services site 2015-09-01</atu-timeline-item>
    <atu-timeline-item>Solve initial network problems 2015-09-01</atu-timeline-item>
    <atu-timeline-item>Technical testing 2015-09-01</atu-timeline-item>
    <atu-timeline-item>Network problems being solved 2015-09-01</atu-timeline-item>
  </atu-timeline>
</template>

<script>
import AtuTimeline from '@/timeline'
const AtuTimelineItem = AtuTimeline.Item

export default {
  components: {
    AtuTimeline,
    AtuTimelineItem
  }
}
</script>
````
