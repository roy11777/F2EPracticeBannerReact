import React from 'react'
import Banner from '../component/banner/Banner'

class Mainpage extends React.Component {
  constructor() {
    super()
    // 預設banner開啟狀態
    this.bannerDefaultOpen = true
    this.state = {
      bannerStatus: this.bannerDefaultOpen ? false : true,
      bannerClass: this.bannerDefaultOpen ? 'opened' : 'closed',
    }
  }

  // transitioning中觸發function
  handleTransition() {
    console.log('whenTransition')
  }

  // 按下展開收合按鈕後
  bannerToggle = e => {
    // 按鈕後切換開合關閉狀態
    const status = !this.state.bannerStatus
    // 找到banner element
    const eleBanner = e.target.closest('.banner')
    // console.log(eleBanner)

    this.setState({
      bannerStatus: status,
    })

    const transitinoInterval = setInterval(this.handleTransition, 15)
    this.setState({ bannerClass: status ? 'closing' : 'opening' })

    eleBanner.addEventListener(
      'transitionend',
      function() {
        this.setState({ bannerClass: status ? 'closed' : 'opened' })
        clearInterval(transitinoInterval)
      }.bind(this)
    )
  }

  render() {
    return (
      <>
        <div className={this.state.bannerClass + ' banner'}>
          <Banner
            BannerStatus={this.state.bannerStatus}
            BannerToggle={this.bannerToggle}
          />
        </div>
      </>
    )
  }
}

export default Mainpage
