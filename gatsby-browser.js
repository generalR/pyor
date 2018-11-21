exports.onRouteUpdate = () => {
  require('./src/styles/global.scss')

  // require('./src/styles/bootstrap.min.css')
  require('./src/styles/normalize.css')
  //require('./src/styles/flexboxgrid.css')
  //require('./src/styles/flexboxgrid.css')

  /* skulle ev. kunna lägga jquery koden här för att på varje onRouteUpdate
  köra koden. Alt. lägga den i layout för att på såvis få in den i varje layout.
  */
  const menuBtn = document.querySelector('.menu-btn')
  const menu = document.querySelector('.menu')
  const menuNav = document.querySelector('.menu-nav')
  const navItems = document.querySelectorAll('.nav-item')

  let showMenu = false
  menuBtn.addEventListener('click', toggleMenu)

  function toggleMenu() {
    if (!showMenu) {
      menuBtn.classList.add('close')
      menu.classList.add('show')
      menuNav.classList.add('show')
      navItems.forEach(item => item.classList.add('show'))

      showMenu = true
    } else {
      menuBtn.classList.remove('close')
      menu.classList.remove('show')
      menuNav.classList.remove('show')
      navItems.forEach(item => item.classList.remove('show'))

      showMenu = false
    }
  }

  const navbutton = document.querySelector('.navbutton')
  console.log(navbutton)
  navbutton.addEventListener('click', openNav)

  function openNav() {
    console.log('inne i nav')
    document.getElementById('myNav').style.width = '100%'
  }

  let $
  if (typeof window !== `undefined`) {
    $ = require('jquery')
  }

  $(document).ready(function() {
    $('h1').click(function() {})
  })

  console.log('-------------------------------------onRouteUpdate')
}
exports.onClientEntry = () => {
  console.log('-------------------------------------onClientEntry')
}
