import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

class Banner extends React.Component {
  constructor(props) {
    // console.log(props)
    super()
    this.state = {
      imgSrc: '',
      buttonText: '',
    }
  }
  componentDidMount = () => {
    this.setState({
      imgSrc: '/images/big.jpg',
      buttonText: '收合',
      imgTitle: '輸入廣告促銷說明文字',
      imgAlt: '輸入廣告促銷說明文字',
    })
  }

  render() {
    return (
      <div className="">
        <Link className="" to="#">
          <img
            className=""
            src={this.state.imgSrc}
            title={this.state.imgTitle}
            alt={this.state.imgAlt}
          />
        </Link>
        <Button
          ButtonText={this.state.buttonText}
          BannerToggle={this.props.BannerToggle}
          BannerStatus={this.props.BannerStatus}
        />
      </div>
    )
  }
}
export default Banner
