var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.banner-destaque img').src = banners[bannerAtual];
}

let tmp = setInterval(trocaBanner, 4000);
let status = true;

function change()
{
    if(status){
        clearInterval(tmp);
        status = !status;
        document.getElementById("B").innerHTML = "Play";
    }
    else
    {
        tmp = setInterval(trocaBanner, 4000);
        status = !status;
        document.getElementById("B").innerHTML = "Stop";
    }
}
