// Your code goes here
window.onload = function () {

    let funBus = document.querySelector('h2');
    funBus.addEventListener("mouseover", (event) => {
        funBus.style.transform = "rotateY(360deg)";
        funBus.style.transitionDuration = "6s";
        event.stopPropagation();
    })

    let nav = document.querySelector('.nav');
    nav.addEventListener("click", (event) => {
        nav.style.backgroundColor = "lightblue";
        event.stopPropagation();
    })

}


let newImg = document.querySelector('.img-content img');
newImg.addEventListener('dblclick', () => {
    newImg.src = 'https://res.cloudinary.com/teepublic/image/private/s--2pSMzF1H--/c_crop,x_10,y_10/c_fit,w_1109/c_crop,g_north_west,h_1260,w_1260,x_-76,y_-106/co_rgb:c8e0ec,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_1260,w_1260/fl_layer_apply,g_north_west,x_-76,y_-106/bo_0px_solid_white/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1564874463/production/designs/5503014_0.jpg';
});

let letsGo = document.querySelector('.content-section');
letsGo.addEventListener("dblclick", (event) => {
    letsGo.style.backgroundColor = "lightblue";
})


let pickDes = document.querySelector('.content-pick');
pickDes.addEventListener("click", (event) => {
    pickDes.style.backgroundColor = "blue";
})


let navStyle = document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener("dblclick", () => {
        item.style.color = "red";
    })
})


let color = document.querySelector("p");
color.addEventListener('mouseover', () => {
    color.style.color = "yellow";
})


document.addEventListener('scroll', function () {
    document.querySelectorAll('h2').forEach(item => {
        item.style.color = "blue";
    })
});

let headFour = document.querySelector('h4')
headFour.addEventListener("mouseover", (event) => {
    headFour.style.transform = "rotateY(380deg)";
    headFour.style.transitionDuration = "7s";
    headFour.style.color = "blue";
})


let footer = document.querySelector('.footer')
footer.addEventListener('mouseup', (event) => {
    footer.style.backgroundColor = "orange";
})

nav.addEventListener('click', (event) => {
    event.preventDefault();
});