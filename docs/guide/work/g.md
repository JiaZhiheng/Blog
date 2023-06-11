```
<!DOCTYPE html>
<html lang="en">
<include file="Ringtones:top"/>
<body>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <defs>
            <symbol id="icon-hot" viewBox="0 0 512.081 512.081">
                <path d="m327.422 490.31c18.552-37.104 40.66-100.284 9.776-127.528-28.468 4.275-51.488 4.301-70.218.096-47.164-10.59-62.093-47.957-49.108-95.81-63.456 57.989-66.135 143.494-42.611 225.83 3.821 13.375-11.15 24.33-22.743 16.602-3.948-2.632-96.68-65.567-96.68-162.481 0-158.769 180-165.6 180-332 0-12.711 14.894-19.668 24.641-11.492 71.928 60.337 202.812 205.378 195.467 338.776-3.641 66.132-39.57 122.385-106.788 167.197-12.714 8.473-28.59-5.483-21.736-19.19z" fill="#ff5144"/>
            </symbol>
            <symbol id="icon-right" viewBox="0 0 1024 1024">
                <path fill="#ccc" d="M761.055557 532.128047c0.512619-0.992555 1.343475-1.823411 1.792447-2.848649 8.800538-18.304636 5.919204-40.703346-9.664077-55.424808L399.935923 139.743798c-19.264507-18.208305-49.631179-17.344765-67.872168 1.888778-18.208305 19.264507-17.375729 49.631179 1.888778 67.872168l316.960409 299.839269L335.199677 813.631716c-19.071845 18.399247-19.648112 48.767639-1.247144 67.872168 9.407768 9.791372 21.984142 14.688778 34.560516 14.688778 12.000108 0 24.000215-4.479398 33.311652-13.439914l350.048434-337.375729c0.672598-0.672598 0.927187-1.599785 1.599785-2.303346 0.512619-0.479935 1.056202-0.832576 1.567101-1.343475C757.759656 538.879828 759.199462 535.391265 761.055557 532.128047z" p-id="5487"></path>
            </symbol>
            <symbol id="icon-left" viewBox="0 0 1024 1024">
                <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8c-16.4 12.8-16.4 37.5 0 50.3l450.8 352.1c5.3 4.1 12.9 0.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" p-id="8019"></path>
            </symbol>
            <symbol id="icon-ringstart" viewBox="0 0 1024 1024">
                <path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z" p-id="4582" fill="#fb8240"></path><path d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z" fill="#fb8240" p-id="4583"></path>
            </symbol>
        </defs>
    </svg>

    <div class="swiper">
        <div class="swiper-wrapper" id="slide1" style="opacity: 1;pointer-events: auto;">
            <div class="swiper-slide">
                <include file="Ringtones:new_header"/>
                <div class="newtestpage">
                    <section>
                        <div class="mobileads"><include file="Ads:ads01"/></div>
                        <ul class="ringtone-ls" style="display:block;width: 100%;">
                            <volist id="list" name="list">
                                <li class="ringtone-item" style="width:100%">
                                    <div class="ringtone-con">
                                        <div class="newtest-btn" audio data-times="{$list.times}">
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
                                            <audio data-play="false" class="audio" src="__CDN__/ringtones/mp3/{$list.mp3_name}"></audio>

                                        </div>

                                        <div class="newtest-info">
                                            <a class="coverlink" href="__ROOT__/ringtones/{$list.id}/{$list.slug}.html"></a>
                                            <div class="ringtone-info">
                                                <h3 class="ringtone-tl">
                                                    <a href="__ROOT__/ringtones/{$list.id}/{$list.slug}.html"
                                                    style="
                                                    overflow: hidden;
                                                    white-space: nowrap;
                                                    text-overflow: ellipsis;">
                                                        {$list.name}
                                                    </a>
                                                </h3>
                                                <div class="ringtone-sub">
                                                    <span class="ringtone-cate">
                                                        {$list.filesize} kb | {$list.times}s
                                                    </span>
                                                </div>
                                            </div>
                                            <svg class="ringtone-item-righticon">
                                                <use xlink:href="#icon-right"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                            </volist>
                        </ul>
                    </section>
                    <span class="ringtone-more">More Ringtones +</span>
                </div>
            </div>
        </div>
        <div class="swiper-wrapper" id="slide2" style="transform: rotateX(90deg);top: 100vh;">
            <div class="swiper-slide">
                <include file="Ringtones:new_header"/>
                <div class="newtestpage">
                    <section>
                        <div class="mobileads"><include file="Ads:ads01"/></div>
                        <ul class="ringtone-ls" style="display:block">
                            <volist id="list2" name="list2">
                                <li class="ringtone-item">
                                    <div class="ringtone-con">
                                        <div class="newtest-btn" audio data-times="{$list.times}">
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
                                            <audio data-play="false" class="audio" src="__CDN__/ringtones/mp3/{$list2.mp3_name}"></audio>
                                        </div>

                                        <div class="newtest-info">
                                            <a class="coverlink" href="__ROOT__/ringtones/{$list2.id}/{$list2.slug}.html"></a>
                                            <div class="ringtone-info">
                                                <h3 class="ringtone-tl">
                                                    <a href="__ROOT__/ringtones/{$list2.id}/{$list2.slug}.html"
                                                    style="
                                                    overflow: hidden;
                                                    white-space: nowrap;
                                                    text-overflow: ellipsis;">
                                                        {$list2.name}
                                                    </a>
                                                </h3>
                                                <div class="ringtone-sub">
                                                    <span class="ringtone-cate">
                                                        {$list2.filesize} kb | {$list2.times}s
                                                    </span>
                                                </div>
                                            </div>
                                            <svg class="ringtone-item-righticon">
                                                <use xlink:href="#icon-right"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                            </volist>
                        </ul>
                    </section>
                    <span class="ringtone-more">More Ringtones +</span>
                </div>
            </div>
        </div>
    </div>
    <script src="__PUBLIC__/js/jquery-1.10.1.min.js"></script>
    <script src="__PUBLIC__/js/mainhiappo.js"></script>
    <script>
        let page = 3;
        function setCookie(name,value,exdays){
           var date = new Date();
           date.setDate(date.getDate()+exdays);
           var expires = "expires="+date.toUTCString();
           document.cookie = name + "=" + value + "; " + expires + ';path=/';
        }
        function getCookie(name){
            var strCookie=document.cookie;
               var arrCookie=strCookie.split("; ");
            for(var i=0;i<arrCookie.length;i++){
               var arr=arrCookie[i].split("=");
               if(arr[0]==name)return arr[1];
            }
             return "";
        }
        function menuCtrl(){
            let wallpapersbtn = document.getElementById('wallpapersbtn');
            let ringtonesbtn = document.getElementById('ringtonesbtn');
            let wallpapers = document.getElementById('wallpapers');
            let ringtones = document.getElementById('ringtones');
            wallpapers.style.display = 'none';
            ringtonesbtn.style.backgroundColor = '#fb8240'
            ringtonesbtn.style.color = '#fff'
            wallpapersbtn.onclick = function(){
                ringtonesbtn.style.backgroundColor = '#fafafa'
                ringtonesbtn.style.color = '#333'
                wallpapersbtn.style.backgroundColor = '#fb8240'
                wallpapersbtn.style.color = '#fff'
                ringtones.style.display = 'none';
                wallpapers.style.display = 'flex';
            }
            ringtonesbtn.onclick = function(){
                wallpapersbtn.style.backgroundColor = '#fafafa'
                wallpapersbtn.style.color = '#333'
                ringtonesbtn.style.backgroundColor = '#fb8240'
                ringtonesbtn.style.color = '#fff'
                wallpapers.style.display = 'none';
                ringtones.style.display = 'block';
            }
        }

        function audioCtrl(){
            var audioList = document.querySelectorAll(`#slide${page-2} div[audio]`);
            for(var j = 0; j< audioList.length; j++){
                audioList[j].addEventListener("click", function(){
                    audioList.forEach(item => {
                        item.querySelectorAll("audio")[0].pause();
                    })
                    var audio = this.querySelectorAll("audio")[0];
                    var ringStart = this.querySelectorAll(".ringstart")[0];
                    var ringEnd = this.querySelectorAll(".ringend")[0];
                    var status = audio.getAttribute('data-play');
                    if(status == 'false'){
                        audio.play();
                        audio.setAttribute('data-play', 'true');
                        ringEnd.style.display = "none"
                        ringStart.style.display = "block"
                    }else{
                        audio.pause();
                        audio.setAttribute('data-play', 'false');
                        ringStart.style.display = "none"
                        ringEnd.style.display = "block"
                    }
                    audio.addEventListener('playing', function(){
                        ringStart.style.display = 'block';
                        ringEnd.style.display = 'none';
                    })
                    audio.addEventListener("pause", function(){
                        ringStart.style.display = 'none';
                        ringEnd.style.display = 'block';
                    })
                })
            }
        }

        window.onload = function(){
            menuCtrl();
            var useAgree = document.getElementById('useAgree');
            var userConsent = document.getElementById('userConsent');
            if(useAgree){
                useAgree.onclick = function(){
                    setCookie('user-consent', '1', 365);
                    userConsent.style.opacity= 0;
                    userConsent.style.pointerEvents = 'none';
                }
                if(!getCookie('user-consent')){
                    userConsent.style.opacity= 1;
                    userConsent.style.pointerEvents = 'auto'
                }
            }

            audioCtrl();




            $(`#slide1 .ringtone-more`).click(function(){
                $('#slide1').css({transform: 'rotateX(90deg)', opacity: 0, pointerEvents: 'none'});
                $('#slide2').css({opacity: 1, transform: 'rotateX(0deg)', top: 0, pointerEvents: 'auto'});
                dataRequest();

            });

            function dataRequest(){

                let newSwiper = '';
                $.ajax({
                    url: "__ROOT__/new_list/",
                    type: "POST",
                    data:{page: page},
                    dataType: "json",
                    success: function(data){
                        if(data.code == 200){
                            let list = data.list;
                            if(list && list.length){
                                let ringItem = '';
                                list.forEach((item, index) => {
                                    ringItem += `<li class="ringtone-item">
                                        <div class="ringtone-con">
                                            <div class="newtest-btn" audio data-times="${item.times}">
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
                                                <audio data-play="false" class="audio" src="__CDN__/ringtones/mp3/${item.mp3_name}"></audio>
                                            </div>
                                            <div class="newtest-info">
                                                <a class="coverlink" href="__ROOT__/ringtones/${item.id}/${item.slug}.html"></a>
                                                <div class="ringtone-info">
                                                    <h3 class="ringtone-tl">
                                                        <a style="
                                                    overflow: hidden;
                                                    white-space: nowrap;
                                                    text-overflow: ellipsis;" href="__ROOT__/ringtones/${item.id}/${item.slug}.html">
                                                            ${item.name}
                                                        </a>
                                                    </h3>
                                                    <div class="ringtone-sub">
                                                        <span class="ringtone-cate">
                                                            ${item.filesize} kb | ${item.times}s
                                                        </span>
                                                    </div>
                                                </div>
                                                <svg class="ringtone-item-righticon">
                                                    <use xlink:href="#icon-right"></use>
                                                </svg>
                                            </div>

                                        </div>
                                    </li>   `;
                                });

                                newSwiper = `<div class="swiper-wrapper" id="slide${page}" style="transform: rotateX(90deg);top: 100vh;">
                                    <div class="swiper-slide">
                                        <include file="Ringtones:new_header"/>
                                        <div class="newtestpage">
                                            <section>
                                                <div class="mobileads"><include file="Ads:ads_more"/></div>
                                                <ul class="ringtone-ls" style="display:block">
                                                    ${ringItem}
                                                </ul>
                                            </section>
                                            <span class="ringtone-more">More Ringtones +</span>
                                        </div>
                                    </div>
                                </div>`;

                                $('.swiper').append(newSwiper);
                                page ++;

                                $(`#slide${page-2} .ringtone-more`).click(function(){
                                    $(`#slide${page-2}`).css({transform: 'rotateX(90deg)', opacity: 0, pointerEvents: 'none'});
                                    $(`#slide${page-1}`).css({opacity: 1, transform: 'rotateX(0deg)', top: 0, pointerEvents: 'auto'});
                                    dataRequest();

                                });

                                $(".swiper .swiper-wrapper:first").remove();
                                audioCtrl();
                                menuCtrl();
                            }
                        }
                    }
                })
            }
        };
    </script>
</body>
</html>
```
