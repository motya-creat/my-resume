window.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    const header = document.querySelector('header')
    const content = document.querySelector('.main__content')
    const scorllNum = 111
    if(window.scrollY > scorllNum) {
        header.classList.add('header-scrolled');
        // content.style.padding = '210px 200px 0 200px'
    }else {
        header.classList.remove('header-scrolled');
        // content.style.padding = '0 200px 0 200px'
    }
    console.log(`Текущая прокрутка ${Math.floor(scrollY)}`)
})