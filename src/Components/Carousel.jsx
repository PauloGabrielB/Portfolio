import icon1 from '../Img/icon1.png'
import icon2 from '../Img/icon2.png'
import icon3 from '../Img/icon3.png'
import icon4 from '../Img/icon4.png'
import icon5 from '../Img/icon5.png'
import icon6 from '../Img/icon6.png'
import icon7 from '../Img/icon7.png'

const Slider = () => {
  const slides = [
    { image: icon1 },
    { image: icon2 },
    { image: icon3 },
    { image: icon4 },
    { image: icon5 },
    { image: icon6 },
    { image: icon7 },
  ];

  return (
    <>
    <h1 className='carousel-h1'>Minhas Habilidades</h1>
    <div className="slider">
      <div className="slide-track">
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} height="100" width="250" alt="" />
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default Slider;