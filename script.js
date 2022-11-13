const buttons = document.querySelectorAll("[data-carousel-button]")
const slides = document.querySelector("[data-slides]")
const ranges = document.querySelectorAll('.custom-range');
const rangePercents = document.querySelectorAll('.range-percent');
const items = document.querySelectorAll('.items');
const nav = document.querySelector('.nav-bar');
const navLink = document.querySelectorAll('.nav-link');
const navMiddle = document.querySelectorAll('.nav-middle');
const logo = document.querySelector('.logo');
const navEnd = document.querySelector('.nav-end > img');
const navEndI = document.querySelector('.nav-end > i');
const sideMenu = document.querySelector('.side-menu');
const scrollTop = document.querySelector('.scroll-top');

ranges.forEach(range => range.value = 0)
rangePercents.forEach(rp => rp.innerText = '0%')

buttons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1
  
      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0) newIndex = slides.children.length - 1
      if (newIndex >= slides.children.length) newIndex = 0
  
      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
    })
  })
  
  window.addEventListener('scroll',()=>{
    if(document.documentElement.scrollTop > 220){
    ranges[0].value++
    if(ranges[0].value>50){
      ranges[0].value = 50
    }
    ranges[1].value++
    if(ranges[1].value>90){
      ranges[1].value = 90
    }
    ranges[2].value++
    if(ranges[2].value>77){
      ranges[2].value = 77
    }
    ranges[3].value++
    if(ranges[3].value>65){
      ranges[3].value = 65
    }
    rangePercents[0].innerText = `${ranges[0].value++}%`
    rangePercents[1].innerText = `${ranges[1].value++}%`
    rangePercents[2].innerText = `${ranges[2].value++}%`
    rangePercents[3].innerText = `${ranges[3].value++}%`
    }

    if(document.documentElement.scrollTop > 1100){
      nav.style.position = 'fixed'
      nav.style.backgroundColor = 'white'
      navLink.forEach(link=>link.style.color = 'black')
      nav.style.animation = '.5s slide-bottom';
      nav.style.zIndex = 1
      navEndI.style.color = 'black'
      logo.src = 'https://topfit.qodeinteractive.com/wp-content/uploads/2017/02/dark-logo-top-fit.png'
    }else{
      nav.style.position = 'relative'
      nav.style.animation = 'none';
      nav.style.backgroundColor = 'transparent'
      navLink.forEach(link=>link.style.color = 'white')
      navEndI.style.color = 'white'
      logo.src = 'https://topfit.qodeinteractive.com/wp-content/uploads/2017/02/white-logo-top-fit.png'
    }

    if(document.documentElement.scrollTop > 1200){
      items[0].style.animation = '2s slide-top';
      items[0].style.opacity = 1;
      items[1].style.animation = '2.5s slide-top';
      items[1].style.opacity = 1;
      items[2].style.animation = '3s slide-top';
      items[2].style.opacity = 1;
    }
    if(document.documentElement.scrollTop > 1500){
      items[3].style.animation = '2s slide-top';
      items[3].style.opacity = 1;
      items[4].style.animation = '2.5s slide-top';
      items[4].style.opacity = 1;
      items[5].style.animation = '3s slide-top';
      items[5].style.opacity = 1;
    }
    if(document.documentElement.scrollTop > 1800){
      items[6].style.animation = '2s slide-top';
      items[6].style.opacity = 1;
      items[7].style.animation = '2.5s slide-top';
      items[7].style.opacity = 1;
      items[8].style.animation = '3s slide-top';
      items[8].style.opacity = 1;
    }
  })

  navEnd.addEventListener('click',()=>{
    navEnd.classList.toggle('width');
    sideMenu.classList.toggle('active');
  })
navEndI.addEventListener('click',()=>{
    nav.classList.toggle('show');
    navMiddle.forEach(nav=>nav.classList.toggle('show-ul'));
})

  function topFunction() {
      if (window.scrollY>0) {
          window.scrollTo(0,window.scrollY-25)
          setTimeout("topFunction()",10)
      }
  }
  scrollTop.addEventListener('click',topFunction)