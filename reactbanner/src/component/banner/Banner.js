import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import background from '../../images/big.jpg'

class Banner extends React.Component {
  constructor(props) {
    // console.log(props)
    super()
    this.state = {
      buttonText: '',
      imgTitle: '',
      imgAlt: '',
    }
  }
  componentDidMount = () => {
    this.setState({
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
            src={background}
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
