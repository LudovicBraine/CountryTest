import React, { Component } from 'react'

class InfoPays extends Component {
  constructor(props){
    super()
  }

  render() {
    console.log(this.props.location.query.pays)
    return (
      <div>
          <h1> {this.props.location.query.pays.name} </h1>
          <p> Population : {this.props.location.query.pays.population}</p>
          <p> Numéro : </p>
          <p> Région : {this.props.location.query.pays.region}</p>
      </div>
    )
  }
}

export default  InfoPays