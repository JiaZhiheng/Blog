i18n ally是一款vs code编辑器插件，可配合翻译平台实现中文和其他语言的转化，并显示转化进度和使用情况
准备
src/assets/i18n 目录下创建所需文本的 json 文件
比如：中文文本文件 zh-CN.json

根目录下 .vscode 内的 setting.json 配置如下：
{
    "i18n-ally.localesPaths": [
        "src/assets/i18n"
    ],
    "i18n-ally.keystyle": "nested"
}
配置
插件配置
翻译接口可选择百度翻译、谷歌翻译 或者 chatGPT，配置相应字段（vscode里的setting.json）
以 chatGPT 为例：
"i18n-ally.translate.openai.apiModel": "gpt-4",
"i18n-ally.ignoredLocales": [],
"i18n-ally.sortKeys": true,
"i18n-ally.localesPaths": "src/assets/i18n",
"i18n-ally.keystyle": "nested",
"i18n-ally.namespace": true,
"i18n-ally.displayLanguage": "zh_CN",
"i18n-ally.pathMatcher": "{locale}.json",
"i18n-ally.preferredDelimiter": "_",
"i18n-ally.extract.parsers.babel": {},
项目配置
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

TranslateModule.forRoot({
  defaultLanguage: lang,
  loader: {
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [ HttpClient ],
  },
}),
提取
场景
- Html 文件中文案
<nz-alert nzType="error" [nzMessage]="'WorkSpace.Message.Error' | translate" nzShowIcon [nzAction]="alertAction"></nz-alert>
- Component 文件中文案
this.message.success(this.translate.instant('WorkSpace.Prompt.History.Copy.Success'));
- Modal 中文案
<ng-template #Personal>
  <div style="display: flex; gap: 16px;">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4.7998 21.0001C4.7998 19.0905 5.55837 17.2592 6.90864 15.9089C8.2589 14.5587 10.0902 13.8001 11.9998 13.8001C13.9094 13.8001 15.7407 14.5587 17.091 15.9089C18.4412 17.2592 19.1998 19.0905 19.1998 21.0001H17.3998C17.3998 19.5679 16.8309 18.1944 15.8182 17.1817C14.8055 16.169 13.432 15.6001 11.9998 15.6001C10.5676 15.6001 9.19412 16.169 8.18143 17.1817C7.16873 18.1944 6.5998 19.5679 6.5998 21.0001H4.7998ZM11.9998 12.9001C9.0163 12.9001 6.5998 10.4836 6.5998 7.5001C6.5998 4.5166 9.0163 2.1001 11.9998 2.1001C14.9833 2.1001 17.3998 4.5166 17.3998 7.5001C17.3998 10.4836 14.9833 12.9001 11.9998 12.9001ZM11.9998 11.1001C13.9888 11.1001 15.5998 9.4891 15.5998 7.5001C15.5998 5.5111 13.9888 3.9001 11.9998 3.9001C10.0108 3.9001 8.3998 5.5111 8.3998 7.5001C8.3998 9.4891 10.0108 11.1001 11.9998 11.1001Z" fill="#525866"/>
    </svg>
    {{ 'Layout.Personal' | translate }}
  </div>
</ng-template>
@ViewChild('Personal') Personal!: TemplateRef<any>;

this.modal.create({
  nzTitle: this.Personal,
  nzContent: PersonalComponent,
  nzFooter: null,
});
提取
插件检测中文文案
[图片]
提取文案到文件中
[图片]
配置文案位置
使用 . 字符去表示包含关系
[图片]
翻译
[图片]


