import React, { Component } from 'react'
import Describtion from './Describtion'
import Details from './Details'

export default class Course extends Component {
  render() {
    return (
      <>
      <h1>Course</h1>
      <br />
      <p>{this.props.title}</p>
      <span>{this.props.num}</span>
      <p>{this.props.level}</p>
      <hr />
      <Describtion />
      <Details />
      </>
    )
  }
}

