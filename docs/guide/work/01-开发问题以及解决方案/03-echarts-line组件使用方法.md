使用
<app-echarts-line [operator]="operator" [extra]="extra" [theme]="'sky'" [isShowZoom]="true" [chartData]="chartData" [options]="options" (chartDataZoom)=chartDataZoom()></app-echarts-line>

<ng-template #operator>
    <nz-tabset (nzSelectedIndexChange)="tabsSelectedIndexChange($event)">
      <nz-tab *ngFor="let item of tabsData" [nzTitle]="item.name"></nz-tab>
    </nz-tabset>
</ng-template>
<ng-template #extra>
    <nz-radio-group [ngModel]="radioValue" (ngModelChange)="radioModelChange($event)">
       <label *ngFor="let item of radioDataValue" nz-radio-button [nzValue]="item.value">{{ item.name }}</label>
    </nz-radio-group>
</ng-template>

<script>
chartDataZoom(instance: any) {
  console.log(instance);
}
</script>
参数
字段
是否必传
类型
含义
theme
true
'sky'
折线图默认主题
operator
false
TemplateRef<void>
自定义传入模板
有标题、tabs
extra
false

TemplateRef<void>

自定义传入模板
有radio button
isShowZoom
false
boolean
是否展示折线图 缩放条
chartData

true

{
    name: string;
    value: number;                  date:string;
  }[]

折线图数据
样例：
[
  {
    name: 'a',
    value: 100,
    date: '2021-1-01'
  },
  {
    name: 'a',
    value: 200,
    date: '2021-1-02'
  },
  {
    name: 'b',
    value: 300,
    date: '2021-1-01'
  },
  {
    name: 'b',
    value: 100,
    date: '2021-1-02'
  },
]
options
false
EChartsOption
折线图自定义配置项
优先级高于theme
chartDataZoom
false
EventEmitter
数据缩放条改变后触发
chartLegendSelected
false
EventEmitter
图例点击选中触发
chartLegendUnselected
false
EventEmitter
图例点击取消触发
效果
[图片]
[图片]
