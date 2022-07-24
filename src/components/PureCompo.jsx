import React, { PureComponent } from 'react'

export class PureCompo extends PureComponent {
    render() {
      console.log("Pure Component Render")
      return (
        <div>
            PureComponent {this.props.name}
        </div>
      )
    }
}

export default PureCompo