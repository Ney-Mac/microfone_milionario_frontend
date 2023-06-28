import img1 from '../../'
import './SliderStyles.css'

export default function Slider({ ...props }) {
    <div className="slider-container">

        <div className="left-arrow arrows" onClick={() => { onLeftArrowClick() }} >
            <div className="arrow">
                <BsChevronLeft />
            </div>
        </div>

        <div className="right-arrow arrows" onClick={() => { onRightArrowClick() }} >
            <div className="arrow">
                <BsChevronRight />
            </div>
        </div>

        <Slider
            ref={sliderRef}
            className='slider'
            infinite={true}
            dots={false}
            speed={3000}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={false}
        >
            <div className="slide-img-container">
                <img src={img2} alt="" className="slider-img" />
            </div>

            <div className="slide-img-container">
                <img src={img1} alt="" className="slider-img" />
            </div>

            <div className="slide-img-container">
                <img src={img3} alt="" className="slider-img" />
            </div>
        </Slider>
    </div>
}