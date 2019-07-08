var left = document.querySelector('#left');
var right = document.querySelector('.right');
var bg = document.querySelector('#bg');
var bgWarp = [
    "url('img/1.png')",
    "url('img/2.png')",
    "url('img/3.png')",
    "url('img/4.png')",
]
var li = document.querySelectorAll('ol li');
var num = 0;
left.onclick = function(){
   num++;
   bg.style.backgroundImage = bgWarp[num>(bgWarp.length-1)?(num=0):num];
}
right.onclick = function(){
    num--;
    bg.style.backgroundImage = bgWarp[num<0?(num=bgWarp.length-1):num];
}

for(let i = 0;i<li.length;i++){
    li[i].onmouseover = function(){
        var nav = this.querySelector('img')
        nav.style.display = 'block';
        bg.style.backgroundImage = bgWarp[i]
    }
    li[i].onmouseout = function(){
        var nav = this.querySelector('img')
        nav.style.display = 'none';
    }
}

