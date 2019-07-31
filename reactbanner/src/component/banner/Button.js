import React from 'react'

const Button = props => {
  // console.log(props)
  return (
    <button className="btn" onClick={props.BannerToggle}>
      {props.BannerStatus ? '展開' : '收合'}
    </button>
  )
}

export default Button
