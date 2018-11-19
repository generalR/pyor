import React from 'react'
import Navigation from '../components/navigation'
import '../styles/flexboxgrid.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <div className="layoutComponentSomSkickasUt ">
        <Navigation />
        {children}
      </div>
    )
  }
}

export default Template
