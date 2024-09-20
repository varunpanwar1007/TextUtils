import React from 'react'
import PropTypes from 'prop-types'

export default function Alert(props){
 return (
  props.alert && <div class={`alert alert-${props.alert.type}`} role="alert">
    <strong>{props.alert.type}</strong>{props.alert.msg}
  </div>
  )
}
