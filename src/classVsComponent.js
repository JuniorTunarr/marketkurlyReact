// Component형 Emmet으로 rce
import React, { Component } from 'react'

export class classVsComponent extends Component {
  render() {
    return (
      <div>classVsComponent</div>
    )
  }
}

export default classVsComponent

// Class형 Emmet으로 rfce
import React from 'react'

function classVsComponent() {
  return (
    <div>classVsComponent</div>
  )
}

export default classVsComponent