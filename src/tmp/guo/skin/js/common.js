(function(){
    var dr=3;
    var canvas = document.getElementById("canvas")
        context = canvas.getContext('2d');
    var focallength = 250,index = 0;
    var img = document.getElementById("img1");
    var pause = false;
    var dots = [];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var Dot = function (centerX, centerY, centerZ, radius, color) {
        this.dx = centerX; //保存原来的位置
        this.dy = centerY;
        this.dz = centerZ;
        this.tx = 0;     //保存粒子聚合后又飞散开的位置
        this.ty = 0;
        this.tz = 0;
        this.z = centerZ;
        this.x = centerX;
        this.y = centerY;
        this.radius = radius;
        this.color = color;
    };
    Dot.prototype = {
        paint: function () {
            context.save();
            context.beginPath();
            var scale = focallength / (focallength + this.z);
            context.arc(canvas.width / 2 + (this.x - canvas.width / 2) * scale, canvas.height / 2 + (this.y - canvas.height / 2) * scale, this.radius * scale, 0, 2 * Math.PI);
            context.fillStyle = "rgba(" + this.color.a + "," + this.color.b + "," + this.color.c + "," + scale + ")";
            context.fill();
            context.restore();
        }
    };
    Array.prototype.forEach = function (callback) {
        for (var i = 0; i < this.length; i++) {
            callback.call(this[i]);
        }
    }

    drawImage();
    var lastTime;

    // 绕y轴变化，得出新的x，z坐标
    function rotateY(ball, angleY) {
        var cosy = Math.cos(angleY),
            siny = Math.sin(angleY),
            x1 = ball.xpos * cosy - ball.zpos * siny,
            z1 = ball.zpos * cosy + ball.xpos * siny;

        ball.xpos = x1;
        ball.zpos = z1;

    }
// 取得当前鼠标相对中心偏移距离 xpos， ypos
    //初始化
    function initAnimate() {
        dots.forEach(function () {

            this.tx = Math.random() * canvas.width - 100;
            this.ty = Math.random() * canvas.height - 100;
            // z坐标扁平化
            this.tz = Math.random() * focallength * 2 - focallength;
            this.paint();
        });
       lastTime = new Date();
       animate();
    }
    //计算帧速率
    var lastTime;
    var derection = true;

    function animate() {
        animateRunning = true;
        var thisTime = +new Date();
        context.save();
        context.globalCompositeOperation = 'destination-out';
        context.globalAlpha = 0.1;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.restore();
        dots.forEach(function () {
            var dot = this;
            if (derection) {
                if (Math.abs(dot.dx - dot.x) < 0.1 && Math.abs(dot.dy - dot.y) < 0.1 && Math.abs(dot.dz - dot.z) < 0.1) {
                    dot.x = dot.dx;
                    dot.y = dot.dy;
                    dot.z = dot.dz;
                    if (thisTime - lastTime > 300) derection = false;
                } else {
                    dot.x = dot.x + (dot.dx - dot.x) * 0.1;
                    dot.y = dot.y + (dot.dy - dot.y) * 0.1;
                    dot.z = dot.z + (dot.dz - dot.z) * 0.1;
                    lastTime = +new Date()
                }
            }
            else {
                if (Math.abs(dot.tx - dot.x) < 0.1 && Math.abs(dot.ty - dot.y) < 0.1 && Math.abs(dot.tz - dot.z) < 0.1) {
                    dot.x = dot.tx;
                    dot.y = dot.ty;
                    dot.z = dot.tz;
                    pause = true;
                } else {
                    dot.x = dot.x + (dot.tx - dot.x) * 0.1;
                    dot.y = dot.y + (dot.ty - dot.y) * 0.1;
                    dot.z = dot.z + (dot.tz - dot.z) * 0.1;
                    pause = false;
                }
            }
            dot.paint();
        });
        dots.sort(function (a, b) {
          //  return b.z - a.z;
        });
        if (!pause) {
            if ("requestAnimationFrame" in window) {
                requestAnimationFrame(animate);
            }
            else if ("webkitRequestAnimationFrame" in window) {
                webkitRequestAnimationFrame(animate);
            }
            else if ("msRequestAnimationFrame" in window) {
                msRequestAnimationFrame(animate);
            }
            else if ("mozRequestAnimationFrame" in window) {
                mozRequestAnimationFrame(animate);
            }
        }
    }
    //绘制图片
    function drawImage() {
        context.drawImage(img, canvas.width / 2 - img.width / 2, canvas.height / 2 - img.height / 2);
       dots = getimgData();
        setTimeout(function(){initAnimate();},2000)
    };

   //得到像素
    function getimgData() {
        var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
        var dots = [];
        var canbreak = false;
        for (var x = 0; x < imgData.width;x+=4 ) {
            for (var y = 0; y < imgData.height; y+=4) {
                var i = (y * imgData.width + x) * 4;
                if (imgData.data[i + 3] >= 128) {
                    var dot = new Dot(x - 3, y -3, 0, 3, {
                        a: imgData.data[i],
                        b: imgData.data[i + 1],
                        c: imgData.data[i + 2]
                    })
                    dots.push(dot);
                }
            }
        }
        console.log(dots.length+'----'+dr)
        return dots;
    };
    //得到随机
    function getRandom(a, b) {
        return Math.random() * (b - a) + a
    }


})();

(function(){
    setTimeout(function(){
        $('.firstBlock__item-inner').velocity({
            left: "0"
        },1000);
    },1000);
    $('.firstBlock__logo span').velocity({
        left: "0"
    },1000);
    mouseOverCT($('#about'),"关于我","DETAIL");
    mouseOverCT($('#work'),"我的案例","DETAIL");
    mouseOverCT($('#ability'),"战斗技能","DETAIL");
    // $(".js-page-transition").on("click", this.currentPageClose.bind(this))

    function mouseOverCT(obj,text1,text2){
        $(obj).mouseover(function(){
            $(obj).text(text1) ;
        });
        $(obj).mouseout(function(){
            $(obj).text(text2) ;
        });
    };
})();
