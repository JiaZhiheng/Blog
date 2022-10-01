<template>
    <div class="wrap">
        <div class="container">
            <div class="items">
                <div class="item">
                    <div class="content">
                        <div class="icon">
                            <img src="../../../public/html.svg" alt="html" />
                        </div>
                        <h2 class="title">HTML</h2>
                        <p class="details">超文本标记语言</p>
                    </div>
                </div>
                <div class="item">
                    <div class="content">
                        <div class="icon">
                            <img src="../../../public/css.svg" alt="css" />
                        </div>
                        <h2 class="title">CSS</h2>
                        <p class="details">层叠样式表</p>
                    </div>
                </div>
                <div class="item">
                    <div class="content">
                        <div class="icon">
                            <img src="../../../public/javascript.svg" alt="javascript" />
                        </div>
                        <h2 class="title">JavaScript</h2>
                        <p class="details">基于原型和头等函数的多范式高级解释型编程语言</p>
                    </div>
                </div>
                <div class="item">
                    <div class="content">
                        <div class="icon">
                            <img src="../../../public/vue.svg" alt="vue" />
                        </div>
                        <h2 class="title">Vue</h2>
                        <p class="details">渐进式 JavaScript 框架</p>
                    </div>
                </div>
                <div class="item">
                    <div class="content">
                        <div class="icon">
                            <img src="../../../public/webpack.svg" alt="webpack" />
                        </div>
                        <h2 class="title">构建工具</h2>
                        <p class="details">敬请期待...</p>
                    </div>
                </div>
                <div class="item">
                    <div class="content">
                        <div class="icon">
                            <img src="../../../public/chrome.svg" alt="chrome" />
                        </div>
                        <h2 class="title">浏览器原理</h2>
                        <p class="details">敬请期待...</p>
                    </div>
                </div>
                <div class="item">
                    <div class="content">
                        <div class="icon">
                            <img src="../../../public/network.svg" alt="network" />
                        </div>
                        <h2 class="title">计算机网络</h2>
                        <p class="details">敬请期待...</p>
                    </div>
                </div>
                <div class="item">
                    <div class="content">
                        <div class="icon">
                            <img src="../../../public/datastructure.svg" alt="datastructure" />
                        </div>
                        <h2 class="title">数据结构与算法</h2>
                        <p class="details">敬请期待...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>    
</script>
<style scoped>
*,
::before,
::after {
    box-sizing: border-box;
}

.wrap {
    width: 100%;
    padding: 0 24px;
}

.container {
    margin: 0 auto;
    max-width: 1152px;
}

.items {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
}

.item {
    width: 100%;
    padding: 8px;
}

.content {
    border: 1px solid #f9f9f9;
    border-radius: 12px;
    padding: 24px;
    height: 100%;
    background-color: #f9f9f9;
}

.icon {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border-radius: 6px;
    width: 48px;
    height: 48px;
    font-size: 24px;
}

.title {
    line-height: 24px;
    font-size: 16px;
    font-weight: 600;
    margin: 0;
}

.details {
    padding-top: 8px;
    line-height: 24px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(60, 60, 60, 0.7);
}

/* 云 */
.cloud-a {
    fill: none;
    stroke: #263238;
    stroke-linecap: round;
    stroke-linejoin: round;
    float: right;
    position: absolute;
    animation: cloud_a 3s infinite;
    animation-direction: alternate;
}

@keyframes cloud_a{
    0% { transform:translateY(20px);}
    50% {transform:translateY(-20px);}
    100% {transform:translateY(20px);}
}

.cloud-b {
    fill: none;
    stroke: #263238;
    stroke-linecap: round;
    stroke-linejoin: round;
    float: right;
    position: absolute;
    animation: cloud_b 3s infinite;
    animation-direction: alternate;
}

@keyframes cloud_b{
    0% { transform:translateY(-10px)}
    50% {transform:translateY(20px)}
    100% {transform:translateY(-10px)}
}

/* 齿轮 */
.gear-a {
    fill: #90caf9;
    stroke: #263238;
    stroke-linecap: round;
    stroke-linejoin: round;
    
    position: absolute;
    /* animation: gear_a 30s infinite; */
    
}

@keyframes gear_a{
    0% { transform:rotate(0deg);transform-origin:center}
    50% { transform:rotate(180deg);transform-origin:center}
    100% {transform:rotate(360deg);transform-origin:center}
}

/* 气泡 */
.bubble {
    /* animation: bubble 3s infinite; */
}

@keyframes bubble{
    0% { transform:rotate(0deg 1000 100);}
    50% { transform:rotate(30deg 1000 100);}
    100% {transform:rotate(60deg 1000 100);}
}

/* 终端 */
.cmd-a, .cmd-b, .cmd-c, .cmd-d, .cmd-e {
    fill: none;
    stroke: #fff;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.cmd-a {
    animation: cmd-a 10s infinite; 
}

.cmd-b {
    animation: cmd-b 10s infinite; 
}

.cmd-c {
    animation: cmd-c 10s infinite; 
}

.cmd-d {
    animation: cmd-d 10s infinite; 
}

.cmd-e {
    animation: cmd-e 10s infinite; 
}

@keyframes cmd-a{
    0% { opacity: 0;}
    10% { opacity: 1;}
    80% { opacity: 1;}
    84% { opacity: 0;}
    100% { opacity: 0;}
}

@keyframes cmd-b{
    10% { opacity: 0;}
    20% { opacity: 1;}
    80% { opacity: 1;}
    88% { opacity: 0;}
    100% { opacity: 0;}
}

@keyframes cmd-c{
    20% { opacity: 0;}
    30% { opacity: 1;}
    80% { opacity: 1;}
    92% { opacity: 0;}
    100% { opacity: 0;}
}

@keyframes cmd-d{
    30% { opacity: 0;}
    40% { opacity: 1;}
    80% { opacity: 1;}
    96% { opacity: 0;}
    100% { opacity: 0;}
}

@keyframes cmd-e{
    40% { opacity: 0;}
    50% { opacity: 1;}
    80% { opacity: 1;}
    100% { opacity: 0;}
}

@media screen and (min-width: 640px) {
    .wrap {
        padding: 0 48px;
    }

    .item {
        width: 50%;
    }
}

@media screen and (min-width: 960px) {
    .wrap {
        padding: 0 64px;
    }

    .item {
        width: 25%;
    }

    .content:hover {
        box-shadow: 0px 0px 30px rgba(204, 204, 204, 0.5);
    }
}
</style>
