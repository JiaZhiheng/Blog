方案对比
window.print
获取body下内容，触发window.print另存为PDF
改动小，实现快速
网页内容会被改变，体验不好
不够高级
jsPDF
创建PDF文件，添加元素；也可以将DOM节点转PDF
掌控写入PDF的内容
不会出现分页字被分割的问题
需要引入字体文件，但由于字体文件过大会导致用户体验差
DOM节点转PDF效果差，会丢失大量样式
表格图片变形
html2canvas + jsPDF   
将DOM节点转化成图片在转化成PDF
改动小，实现快
相当于放了图片在PDF里，会失真
在图片超出PDF页面大小时缩小展示
PDF可搜索复制功能丢失
pdfmake
创建PDF文件，添加元素；结合html-to-pdfmake可将DOM节点转PDF
写入的PDF内容可掌控
解决分页截断处理较好
需要导入字体文件，但由于字体文件过大会导致用户体验差
代码量相对较多
pdfmake使用
步骤
1. pnpm i pdfmake
2. 找个想要的字体（字体库） 例如导入字体 NotoSansSC-Regular.ttf
3. 下载放到 node_modules/examples/fonts
4. 打开 node_modules 下 pdfmake 文件夹的终端
5. 运行
node build-vfs.js "./examples/fonts"
6. 使用
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
pdfMake.fonts = {
  NotoSansSC: {
    normal: `${window.location.origin}/assets/NotoSansSC-Regular.ttf`,
    bold: `${window.location.origin}/assets/NotoSansSC-Bold.ttf`,
  },
};

const docDefinition: any = {
  pageMargins: [ 40, 60, 40, 60 ],
  content, // 写入的内容
  pageSize: 'A4',
  defaultStyle: {
    // 设置定义的字体为默认字体
    font: 'NotoSansSC',
    fontSize: 16,
    bold: true,
  },
  styles: {
    header: {
      background: '#f2f2f2',
      bold: true,
      width: '100%',
      alignment: 'center',
      margin: [ 0, 0, 0, 10 ],
    },
    table: {
      fontSize: 12,
      bold: false,
      margin: [ 0, 0, 0, 10 ],
    },
    sub_title: {
      fontSize: 12,
      bold: false,
      margin: [ 0, 0, 0, 10 ],
    },
    text: {
      fontSize: 12,
      bold: false,
      margin: [ 0, 0, 0, 10 ],
    },
  },
};
// 测试用
// const win = window.open('', '_blank');
// pdfMake.createPdf(docDefinition).open({}, win);

pdfMake.createPdf(docDefinition).download('分析报告', () => {
  this.message.success('下载成功');
});
存在的问题
字体导入方式存在问题
根据文档看VFS虚拟文件系统目前没有实现，Http协议方式会更加推荐使用
Http导入字体，因为字体文件较大且可能会同时使用一个字体的多个文件（像Regular、Bold）,使用体验不好
优化方式
1. 在生成PDF及下载字体时给用户反馈，表示正在下载中
2. 预加载字体文件