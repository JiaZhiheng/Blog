```html
<!doctype html>
<html lang="en">
  <include file="Ringtones:top" />
  <script async="async" src="https://www.google.com/adsense/search/ads.js"></script>
  <script type="text/javascript" charset="utf-8">
    (function (g, o) {
      (g[o] =
        g[o] ||
        function () {
          (g[o]['q'] = g[o]['q'] || []).push(arguments);
        }),
        (g[o]['t'] = 1 * new Date());
    })(window, '_googCsa');
  </script>
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <defs>
      <symbol id="icon-down" viewBox="0 0 512 512">
        <path
          d="M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64
            c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472
            c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z"
          fill="#fff"
        />
        <path
          d="M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z"
          fill="#fff"
        />
      </symbol>
    </defs>
  </svg>
  <body>
    <include file="Public:header" />
    <div class="wrapper">
      <div class="searchpage">
        <div class="row-ls">
          <h2 class="search-tl">{$q} ringtones</h2>
          <div class="mobileads"><include file="Ads:ads01" /></div>
          <php> if(!empty($result)){ </php>
          <div class="row-me" id="content">
            <volist id="result" name="result" key="index">
              <div class="row-item">
                <div class="row-curlink" audio>
                  <div class="ringend">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      style="height:45px;width:45px"
                    >
                      <rect
                        x="0"
                        y="0"
                        height="45"
                        width="45"
                        rx="8"
                        ry="8"
                        style="fill: #fb8240"
                      />
                      <circle cx="22.5" cy="22.5" r="15" stroke-width="1" fill="#fff" />
                    </svg>
                    <svg
                      t="1663827526728"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="829"
                      width="20"
                      height="20"
                      style="position:absolute;top:12.5;left:15"
                      fill="#fb8240"
                    >
                      <path
                        d="M780.8 475.733333L285.866667 168.533333c-27.733333-17.066667-64 4.266667-64 36.266667v614.4c0 32 36.266667 53.333333 64 36.266667l492.8-307.2c29.866667-14.933333 29.866667-57.6 2.133333-72.533334z"
                        p-id="830"
                      ></path>
                    </svg>
                  </div>
                  <div class="ringstart">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      style="height:45px;width:45px"
                    >
                      <rect
                        x="0"
                        y="0"
                        height="45"
                        width="45"
                        rx="8"
                        ry="8"
                        style="fill: #fb8240"
                      />
                      <circle cx="22.5" cy="22.5" r="15" stroke-width="1" fill="#fff" />
                    </svg>
                    <svg
                      t="1663834339925"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="2655"
                      width="20"
                      height="20"
                      fill="#fb8240"
                      style="position:absolute;top:12.5;left:13"
                    >
                      <path
                        d="M319.618435 145.655358c-30.518061 0-55.258535 24.740474-55.258535 55.258535l0 622.170169c0 30.518061 24.740474 55.258535 55.258535 55.258535s55.258535-24.740474 55.258535-55.258535l0-622.170169C374.876969 170.395832 350.136495 145.655358 319.618435 145.655358z"
                        p-id="2656"
                      ></path>
                      <path
                        d="M704.381565 145.655358c-30.518061 0-55.258535 24.740474-55.258535 55.258535l0 622.170169c0 30.518061 24.740474 55.258535 55.258535 55.258535s55.258535-24.740474 55.258535-55.258535l0-622.170169C759.6401 170.395832 734.899626 145.655358 704.381565 145.655358z"
                        p-id="2657"
                      ></path>
                    </svg>
                  </div>
                  <div class="search-item-name">{$result.name}</div>
                  <audio
                    data-play="false"
                    class="audio"
                    src="__CDN__/ringtones/mp3/{$result.mp3_name}"
                  ></audio>
                </div>
                <div class="search-item-time">{$result.times}s</div>
                <div class="search-category-list">
                  <if condition="empty($result['tag']) neq true">
                    <volist id="tag" name="result.tag">
                      <span class="search-item-category">
                        <a href="__ROOT__/ringtones/{$tag.slug}.html">{$tag.name}</a>
                      </span>
                    </volist>
                    <else />
                    <span class="search-item-category">
                      <a href="__ROOT__/ringtones/{$result.cate_slug}.html">{$result.cate_name}</a>
                    </span>
                  </if>
                </div>
                <div class="search-download-box">
                  <a
                    class="search-item-download"
                    href="__ROOT__/ringtones/{$result.id}/{$result.slug}.html{$append}"
                  >
                    <svg class="download-icon">
                      <use xlink:href="#icon-down"></use>
                    </svg>
                    <span>Download</span>
                  </a>
                </div>
              </div>
              <if condition="$index eq 6">
                <div class="mobileads">
                  <include file="Ads:ads02" />
                </div>
              </if>
              <if condition="$index eq 12">
                <div class="mobileads">
                  <include file="Ads:ads03" />
                </div>
              </if>
            </volist>
          </div>
          <php> }else{ </php>
          <div class="noresult">
            <p class="noresult-tl"> Your search <b>- {$q} - </b>did not match any documents. </p>
            <p>Suggestions:</p>
            <ul class="noresult-ls">
              <li class="noresult-item"> Make sure that all words are spelled correctly. </li>
              <li class="noresult-item">Try different keywords.</li>
              <li class="noresult-item">Try more general keywords.</li>
              <li class="noresult-item">Try fewer keywords.</li>
            </ul>
          </div>
          <php> } </php>
        </div>
      </div>
    </div>
    <include file="Public:footer" />
    <script>
      /** 音乐播放器功能
       * 获取 id 为 content 的标签下所有具有 audio 属性的 div 标签并将其组成名为「audioList」的类数组
       * 将「audioList」类数组转换为「audioList」数组
       * 获取「aduioList」数组的最后12项并将其定义为临时数组「tempList」
       * 遍历该临时数组并为每一项加入点击事件
       *    点击事件功能如下:
       *       暂停所有正在播放的音乐
       *       当音乐播放状态为暂停并触发点击事件时
       *          播放音乐、更改播放状态、隐藏播放按钮、显示暂停按钮
       *       反之
       *          暂停音乐、更改播放状态、显示播放按钮、隐藏暂停按钮
       *       监听播放状态
       *       当音乐正在播放时
       *          隐藏播放按钮、显示暂停按钮
       *       反之
       *          显示播放按钮、隐藏暂停按钮
       */
      function audioCtrl() {
        var audioList = document.querySelectorAll(`#content div[audio]`);
        audioList = Array.prototype.slice.call(audioList);
        var tempList = audioList.slice(-12);
        for (var j = 0; j < tempList.length; j++) {
          tempList[j].addEventListener('click', function () {
            // querySelectorAll 方法捕获的内容都是数组，故在方法后加[0]意为获取数组的第0项，即当前dom元素
            tempList.forEach((item) => {
              item.querySelectorAll('audio')[0].pause();
            });
            var audio = this.querySelectorAll('audio')[0];
            var ringStart = this.querySelectorAll('.ringstart')[0];
            var ringEnd = this.querySelectorAll('.ringend')[0];
            var duration = this.getAttribute('data-times');
            var status = audio.getAttribute('data-play');
            if (status == 'false') {
              audio.play();
              audio.setAttribute('data-play', 'true');
              ringEnd.style.display = 'none';
              ringStart.style.display = 'block';
            } else {
              audio.pause();
              audio.setAttribute('data-play', 'false');
              ringStart.style.display = 'none';
              ringEnd.style.display = 'block';
            }
            // 加入监听事件的目的是当切换播放的音乐时，其他按钮都能回到暂停状态
            audio.addEventListener('playing', function () {
              ringStart.style.display = 'block';
              ringEnd.style.display = 'none';
            });
            audio.addEventListener('pause', function () {
              ringStart.style.display = 'none';
              ringEnd.style.display = 'block';
            });
          });
        }
      }

      window.onload = function () {
        audioCtrl();
        function GetRect(element) {
          let rectbox = element.getBoundingClientRect();
          let top = document.documentElement.clientTop ? document.documentElement.clientTop : 0;
          let left = document.documentElement.clientLeft ? document.documentElement.clientLeft : 0;
          return {
            top: rectbox.top - top,
            bottom: rectbox.bottom - top,
            left: rectbox.left - left,
            right: rectbox.right - left
          };
        }
        var viewHeight = document.documentElement.clientHeight;
        let total = true;
        let page = 2;
        let q = '<php>echo $q</php>'; // 关键词

        $(window).scroll(function () {
          let obj = GetRect(moreFlag);
          if (obj.top < viewHeight && obj.bottom >= viewHeight) {
            if (total) {
              loadMore();
            }
          }
        });

        function loadMore() {
          total = false;
          $.ajax({
            url: '__ROOT__/search_list/',
            type: 'POST',
            data: {
              q: q,
              page: page
            },
            dataType: 'json',
            success: function (data) {
              if (data.code == 200) {
                let list = data.list;
                let ads = `<div class="mobileads"><include file="Ads:ads_more"/></div>`;
                if (list && list.length) {
                  let contentHtml = '';
                  list.forEach((item, index) => {
                    // 循环遍历返回结果数组
                    var tagHtml = ''; // 定义tagHtml为空字符串，用于渲染tag标签
                    if (item.tag.length != 0) {
                      // 当tag标签数长度不为0时
                      item.tag.forEach((t, num) => {
                        // 循环便利tag标签数组将其组成tag标签组
                        tagHtml += `                
                                                <span class="search-item-category">
                                                    <a href="__ROOT__/ringtones/${t.slug}.html">${t.name}</a>
                                                </span>
                                            `;
                      });
                    } else {
                      // 当tag标签数长度为0时 渲染下列标签
                      tagHtml = `
                                            <span class="search-item-category">
                                                <a href="__ROOT__/ringtones/${item.cate_slug}.html">${item.cate_name}</a>
                                            </span>   
                                        `;
                    }
                    contentHtml =
                      `
                                        <div class="row-item">
                                            <div class="row-curlink" audio> 
                                                <div class="ringend">
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="height:45px;width:45px">
                                                        <rect x="0" y="0" height="45" width="45" rx="8" ry="8" style="fill: #fb8240"/>
                                                        <circle cx="22.5" cy="22.5" r="15"  stroke-width="1" fill="#fff" />
                                                    </svg>
                                                    <svg t="1663827526728" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="829" width="20" height="20" style="position:absolute;top:12.5;left:15" fill="#fb8240"><path d="M780.8 475.733333L285.866667 168.533333c-27.733333-17.066667-64 4.266667-64 36.266667v614.4c0 32 36.266667 53.333333 64 36.266667l492.8-307.2c29.866667-14.933333 29.866667-57.6 2.133333-72.533334z" p-id="830"></path></svg>
                                                </div>
                                                <div class="ringstart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="height:45px;width:45px">
                                                        <rect x="0" y="0" height="45" width="45" rx="8" ry="8" style="fill: #fb8240"/>
                                                        <circle cx="22.5" cy="22.5" r="15"  stroke-width="1" fill="#fff" />
                                                    </svg>
                                                    <svg t="1663834339925" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2655" width="20" height="20" fill="#fb8240" style="position:absolute;top:12.5;left:13"><path d="M319.618435 145.655358c-30.518061 0-55.258535 24.740474-55.258535 55.258535l0 622.170169c0 30.518061 24.740474 55.258535 55.258535 55.258535s55.258535-24.740474 55.258535-55.258535l0-622.170169C374.876969 170.395832 350.136495 145.655358 319.618435 145.655358z" p-id="2656"></path><path d="M704.381565 145.655358c-30.518061 0-55.258535 24.740474-55.258535 55.258535l0 622.170169c0 30.518061 24.740474 55.258535 55.258535 55.258535s55.258535-24.740474 55.258535-55.258535l0-622.170169C759.6401 170.395832 734.899626 145.655358 704.381565 145.655358z" p-id="2657"></path></svg>
                                                </div>
                                                <div class="search-item-name">${item.name}</div>
                                                <audio data-play="false" class="audio" src="__CDN__/ringtones/mp3/${item.mp3_name}"></audio>
                                            </div>
                                            <div class="search-item-time">${item.times}s</div>
                                            <div class="search-category-list">
                                               ` +
                      tagHtml +
                      ` 
                                            </div>
                                            <div class="search-download-box">
                                                <a class="search-item-download" href="__ROOT__/ringtones/${item.id}/${item.slug}.html{$append}">
                                                    <svg class="download-icon">
                                                        <use xlink:href="#icon-down"></use>
                                                    </svg>
                                                    <span>Download</span>
                                                </a>
                                            </div>
                                        </div>
                                    `;
                    let allContentHtml = '';
                    if ((index + 1) % 6 == 0) {
                      allContentHtml = contentHtml + ads;
                    } else {
                      allContentHtml = contentHtml;
                    }
                    $('#content').append(allContentHtml);
                  });
                  page++;
                  total = true;
                  audioCtrl();
                }
              }
            }
          });
        }
      };
    </script>
  </body>
</html>
```
