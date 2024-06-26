import React from 'react'
import { withTranslation } from 'react-i18next'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Slider.css'

class CitiesSlider extends React.Component {
  constructor(props) {
    super(props)

    this.IMAGE_PARTS = 4

    this.changeTO = null
    this.AUTOCHANGE_TIME = 4000

    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false }
  }

  componentWillUnmount() {
    window.clearTimeout(this.changeTO)
  }

  componentDidMount() {
    this.runAutochangeTO()
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true })
    }, 0)
  }

  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1)
      this.runAutochangeTO()
    }, this.AUTOCHANGE_TIME)
  }

  changeSlides(change) {
    window.clearTimeout(this.changeTO)
    const { length } = this.props.slides
    const prevSlide = this.state.activeSlide
    let activeSlide = prevSlide + change
    if (activeSlide < 0) activeSlide = length - 1
    if (activeSlide >= length) activeSlide = 0
    this.setState({ activeSlide, prevSlide })
  }

  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state
    // eslint-disable-next-line react/prop-types
    const { t } = this.props;
    return (
      <div
        className={classNames('slider relative z-10', {
          's--ready': sliderReady,
        })}
      >
        <p className="slider__top-heading max-sm:-translate-y-6">
          {t('travelers')}
        </p>
        <div className="slider__slides">
          {this.props.slides.map((slide, index) => (
            <div
              className={classNames('slider__slide', {
                's--active': activeSlide === index,
                's--prev': prevSlide === index,
              })}
              key={slide.city}
            >
              <div className="slider__slide-content">
                <h3 className="slider__slide-subheading max-sm:text-xl max-iphone:text-sm">
                  {slide.country || slide.city}
                </h3>
                <h2 className="slider__slide-heading font-semibold max-sm:text-5xl max-iphone:text-3xl">
                  {slide.city.split('').map((l, i) => (
                    <span key={i}>{l}</span>
                  ))}
                </h2>
                <p className="slider__slide-readmore text-xl">
                  {t('readMore')}
                </p>
              </div>
              <div className="slider__slide-parts">
                {[...Array(this.IMAGE_PARTS).keys()].map((i) => (
                  <div className="slider__slide-part" key={i}>
                    <div
                      className="slider__slide-part-inner"
                      style={{ backgroundImage: `url(${slide.img})` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          className="slider__control"
          onClick={() => this.changeSlides(-1)}
        ></div>
        <div
          className="slider__control slider__control--right"
          onClick={() => this.changeSlides(1)}
        ></div>
      </div>
    )
  }
}

CitiesSlider.propTypes = {
  slides: PropTypes.array.isRequired,
}

export default withTranslation()(CitiesSlider)
