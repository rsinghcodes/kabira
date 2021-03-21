import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
});

export default function testimonial() {
  return (
    <>
      <style jsx>{`
        section {
          position: relative;
          width: 100%;
          min-height: 60vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        .swiper-container {
          width: 100%;
          padding-top: 50px;
          padding-bottom: 50px;
        }
        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 320px;
          background: #fff;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
          //   filter: blur(4px);
          border-radius: 10px;
        }

        .swiper-slide-active {
          filter: blur(0px);
        }
        .testimonialBox {
          position: relative;
          width: 100%;
          padding: 40px;
          padding-top: 90px;
          color: #999;
        }
        .testimonialBox .quote {
          position: absolute;
          top: 20px;
          right: 30px;
          width: 50px;
          opacity: 0.2;
        }
        .testimonialBox .details {
          display: flex;
          align-items: center;
          margin-top: 20px;
        }
        .testimonialBox .details .imgBx {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 10px;
        }
        .testimonialBox .details .imgBx img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .testimonialBox .details h3 {
          font-size: 16px;
          font-weight: 400;
          letter-spacing: 1px;
          color: #2196f3;
          line-height: 1.1em;
        }

        .testimonialBox .details h3 span {
          font-size: 12px;
          color: #666;
        }
        .swiper-container-3d .swiper-slide-shadow-left,
        .swiper-container-3d .swiper-slide-shadow-right {
          background-image: none;
        }
      `}</style>
      <section>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonialBox">
                <img src="quote.svg" alt="quote" className="quote" />
                <div className="content">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Commodi temporibus eos dolor iusto rerum dolores laboriosam
                    consequuntur ex accusamus.
                  </p>
                  <div className="details">
                    <div className="imgBx">
                      <img src="img3.jpg" alt="" />
                    </div>
                    <h3>
                      Someone Famous <br />
                      <span>Creative Designer</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonialBox">
                <img src="quote.svg" alt="quote" className="quote" />
                <div className="content">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Commodi temporibus eos dolor iusto rerum dolores laboriosam
                    consequuntur ex accusamus.
                  </p>
                  <div className="details">
                    <div className="imgBx">
                      <img src="img3.jpg" alt="" />
                    </div>
                    <h3>
                      Someone Famous <br />
                      <span>Creative Designer</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonialBox">
                <img src="quote.svg" alt="quote" className="quote" />
                <div className="content">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Commodi temporibus eos dolor iusto rerum dolores laboriosam
                    consequuntur ex accusamus.
                  </p>
                  <div className="details">
                    <div className="imgBx">
                      <img src="img3.jpg" alt="" />
                    </div>
                    <h3>
                      Someone Famous <br />
                      <span>Creative Designer</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
