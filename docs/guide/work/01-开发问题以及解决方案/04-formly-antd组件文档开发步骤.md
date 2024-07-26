字段接口
从[component].component.ts文件中提取出外部传入的字段。
命名
[conponent].ts
示例
以date.ts为例：
import { DisabledTimeFn, PresetRanges } from 'ng-zorro-antd/date-picker';

export interface DateProps {
  allowClear: boolean;
  disabledDate: (current: Date) => boolean;
  mode: 'date' | 'week' | 'month' | 'year';
  size: 'default' | 'large' | 'small';
  borderless: boolean;
  inline: boolean;
  showTime: object | boolean;
  disabledTime: DisabledTimeFn;
  inputReadOnly: boolean;
  format: string;
  showToday: boolean;
  showNow?: boolean;
  ranges?: PresetRanges | undefined;
  separator?: string;
  placeholder: string;
}
props的默认参数
把参数的默认值提取到[component].module.ts文件中，位置如下图。
[图片]
示例
以date.module.ts为例：
FormlyModule.forChild({
    types: [
        {
            name: 'date',
            component: DateComponent,
            wrappers: [ 'form-item' ],
            defaultOptions: {
                props: {
                    allowClear: true,
                    mode: 'date',
                    showToday: false,
                    showNow: false,
                    inputReadOnly: true,
                },
            },
        },
        {
            name: 'date-time',
            extends: 'date',
            defaultOptions: {
                props: {
                    showTime: true,
                },
            },
        },
        {
            name: 'date-range',
            component: DateRangeComponent,
            wrappers: [ 'form-item' ],
            defaultOptions: {
                props: {
                    allowClear: true,
                    mode: 'date',
                    inputReadOnly: true,
                },
            },
        },
    ],
}),
修改原 component 文件
引入[component].ts文件，让class像[DateComponent]继承 FieldType<FormlyFieldConfig<FormlyFieldProps & DateProps>>。
修改调用属性方式
原先大部分属性是按照props[attr]调用的，引入[props]文件后，修改为props.attr方式去调用属性。
示例
以date.component.ts为例：
<nz-date-picker
    [nzId]="id"
    [ngModel]="value"
    [formlyAttributes]="field"
    [nzAllowClear]="props.allowClear"
    [nzDisabledDate]="props.disabledDate"
    [nzMode]="props.mode"
    [nzPlaceHolder]="placeholder"
    [nzSize]="props.size"
    [nzBorderless]="props.borderless"
    [nzInline]="props.inline"
    [nzShowTime]="props.showTime"
    [nzDisabledTime]="props.disabledTime"
    [nzInputReadOnly]="props.inputReadOnly"
    [nzFormat]="props.format"
    [nzShowToday]="props.showToday"
    [nzShowNow]="props.showNow"
    [nzDisabled]="control.disabled"
    (ngModelChange)="onValueChange($event)"
</nz-date-picker>
注意
如果存在多个组件的话，需要考虑组件之间的关系。
如果是同级组件，就正常改造；如果是嵌套组件，就需要参考https://storybook.js.org/docs/7.0/angular/writing-stories/stories-for-multiple-components
编写 stories
【快捷使用】模块是通过Meta中的tags属性自动生成的。
Meta
单个场景下全部配置或多个场景下公共配置。
argTypes属性是来配置组件每个属性的控制器的。
Story
一个场景对应一个Story。
name属性用来设置在左侧导航中展示Story时的标题的。
argTypes属性是来配置该场景下特定属性的控制器的。
render属性中定义使用formly-form时配置的两个属性，与x-form配置相同。
其他
注册中文
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
组件中包含 icon 引入 HttpClientModule
import { HttpClientModule } from '@angular/common/http';
const meta: Meta = {
  ...
  decorators: [
    moduleMetadata({
      imports: [
        ...
        HttpClientModule,
        ...
      ],
    }),
  ],
  ...
控器器类型
// Data Type is boolean
control: {
  type: 'boolean',
},

// Data Type is number
control: {
  type: 'number',
},
control: {
  type: 'range',
},

// Data Type is object
control: {
  type: 'object',
},

// Data Type is array
control: {
  type: 'object',
},
control: {
  type: 'file',
},

// Data Type is enum
control: {
  type: 'radio',
},
control: {
  type: 'inline-radio',
},
control: {
  type: 'check',
},
control: {
  type: 'inline_check',
},
control: {
  type: 'select',
},
control: {
  type: 'multi-select',
},

// Data Type is string
control: {
  type: 'text',
},
control: {
  type: 'color',
},
control: {
  type: 'date',
},
