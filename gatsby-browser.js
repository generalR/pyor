exports.onRouteUpdate = () => {
  require('./src/styles/global.scss')

  // require('./src/styles/bootstrap.min.css')
  require('./src/styles/normalize.css')
  //require('./src/styles/flexboxgrid.css')
  //require('./src/styles/flexboxgrid.css')

  /* skulle ev. kunna lägga jquery koden här för att på varje onRouteUpdate
  köra koden. Alt. lägga den i layout för att på såvis få in den i varje layout.
  */

  console.log('-------------------------------------onRouteUpdate')
}
exports.onClientEntry = () => {
  console.log('-------------------------------------onClientEntry')
}
