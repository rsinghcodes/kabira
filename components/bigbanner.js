import Title from "./title";
import SubTitle from "./subTitle";

export default function bigbanner() {
  return (
    <>
      <style jsx>{`
        .banner {
          position: relative;
          width: 100%;
          min-height: 80vh;
          background: url(/5.jpg);
          background-size: cover;
        }
        .content {
          position: absolute;
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          flex-direction: column;
          padding-bottom: 70px;
          color: #f1f3f6;
          background: linear-gradient(0deg, #00000088 30%, #ffffff44 100%);
        }
        @media screen and (max-width: 768px) {
          .banner {
            min-height: 75vh;
          }
          .content {
            text-align: center;
            padding: 0 2px 50px 2px;
          }
        }
        @media screen and (max-width: 241px) {
          .banner {
            min-height: 100vh;
          }
          .content {
            text-align: center;
            padding: 0 2px 50px 2px;
          }
        }
      `}</style>
      <div className="banner">
        <div className="content">
          <Title value="Convert your design into reality." />
          <SubTitle
            className="md:mt-4 mt-2"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
    </>
  );
}
