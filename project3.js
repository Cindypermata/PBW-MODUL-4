// var mybtn = document.getElementById('btn-top');
// function scrollFunction(){
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         mybtn.style.display = 'block';   
//     }
//     else {
//         mybtn.style.display = 'none';
//     }
// }

// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }

function scrolling(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}



function klik(){    
    var harga= document.getElementById("harga").value;
    var berat= document.getElementById("berat").value;
    var hargaTotal = harga * berat;
    document.getElementById("total").value = hargaTotal;
}

const burger = document.querySelector('.burger')
const sidebar = document.querySelector('.sidebar')
const bgSidebar = document.querySelector('.bg-sidebar')

burger.addEventListener('click', function() {
  this.classList.toggle('change')
  sidebar.classList.toggle('change')
  bgSidebar.classList.toggle('change')
})

bgSidebar.addEventListener('click', function() {
  this.classList.remove('change')
  sidebar.classList.remove('change')
  burger.classList.remove('change')
})