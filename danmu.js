window.onload=function () {
    let danmu=document.getElementById('danmu');
    let speak=['6666','主播真帅','哈哈哈','哈哈哈','哈哈哈','好帅啊','前方高能','hahahahaha'];
    let client_height=danmu.clientHeight;

    function insert() {
        let newItem=document.createElement('div');
        let randomIndex=Math.floor(Math.random()*speak.length);
        newItem.innerHTML=speak[randomIndex];
        newItem.className='newItem';
        newItem.style.color='#'+Math.random().toString(16).slice(-6);
        let newItem_top=Math.floor(Math.random()*(client_height-50));   //弹幕高度为50
        let newItem_left=danmu.clientWidth;
        newItem.style.top=newItem_top+'px';
        newItem.style.left=newItem_left+'px';
        danmu.appendChild(newItem);
        move(newItem);
    }

    function move(obj) {
        let timer1=setInterval(function () {
            let newItem_width=obj.clientWidth;
            let newItem_offsetLeft=obj.offsetLeft;
            if(--newItem_offsetLeft<=-newItem_width){
                danmu.removeChild(obj);
                clearInterval(timer1);
            }
            obj.style.left=newItem_offsetLeft+'px';
        },1);
    }

    setInterval(function () {
        insert();
    },1000);
};