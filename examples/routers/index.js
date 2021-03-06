import Vue from 'vue'
import Router from 'vue-router'
import Button from './button'
import Badge from './badge'
import Menu from './menu'
import Icon from './icon'
import Input from './input'
import Checkbox from './checkbox'
import Rate from './rate'
import Pagination from './pagination'
import Card from './card'
import Grid from './grid'
import Radio from './radio'
import Switch from './switch'
import Message from './message'
import Transition from './transition'
import Breadcrumb from './breadcrumb'
import Tabs from './tabs'
import Tag from './tag'
import Affix from './affix'
import Progress from './progress'
import ToolTip from './tooltip'
import Popover from './popover'
import Popconfirm from './popconfirm'
import Timeline from './timeline'
import Dropdown from './dropdown'
import Avatar from './avatar'
import Steps from './steps'
import TimePicker from './timepicker'
import BackTop from './back-top'
import Layout from './layout'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/button',
      component: Button
    },
    {
      path: '/menu',
      component: Menu
    },
    {
      path: '/icon',
      component: Icon
    },
    {
      path: '/checkbox',
      component: Checkbox
    },
    {
      path: '/input',
      component: Input
    },
    {
      path: '/rate',
      component: Rate
    },
    {
      path: '/pagination',
      component: Pagination
    },
    {
      path: '/card',
      component: Card
    },
    {
      path: '/grid',
      component: Grid
    },
    {
      path: '/radio',
      component: Radio
    },
    {
      path: '/switch',
      component: Switch
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/transition',
      component: Transition
    },
    {
      path: '/breadcrumb',
      component: Breadcrumb
    },
    {
      path: '/tabs',
      component: Tabs
    },
    {
      path: '/tag',
      component: Tag
    },
    {
      path: '/affix',
      component: Affix
    },
    {
      path: '/progress',
      component: Progress
    },
    {
      path: '/tooltip',
      component: ToolTip
    },
    {
      path: '/popover',
      component: Popover
    },
    {
      path: '/popconfirm',
      component: Popconfirm
    },
    {
      path: '/timeline',
      component: Timeline
    },
    {
      path: '/dropdown',
      component: Dropdown
    },
    {
      path: '/badge',
      component: Badge
    },
    {
      path: '/avatar',
      component: Avatar
    },
    {
      path: '/steps',
      component: Steps
    },
    {
      path: '/timepicker',
      component: TimePicker
    },
    {
      path: '/backtop',
      component: BackTop
    },
    {
      path: '/layout',
      component: Layout
    }
  ]
})

export default router
