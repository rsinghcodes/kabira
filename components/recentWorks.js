import Head from "next/head";

export default function recentWorks() {
  return (
    <>
      <style jsx>{`
        .container {
          width: 100%;
          max-width: 100vw;
          padding: 0 0.5rem;
        }
        .image-gallery {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-rows: auto;
          grid-gap: 1rem;
          grid-template-areas:
            "img-1 img-2 img-3 img-3"
            "img-1 img-4 img-5 img-6"
            "img-7 img-7 img-8 img-6";
        }
        .image-gallery a {
          width: 100%;
          height: 25rem;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          border-radius: 5px;
        }
        .image-gallery a i {
          color: rgba(255, 255, 255, 0.6);
          font-size: 3rem;
          position: relative;
          z-index: 100;
          padding: 1rem 3rem;
          border: 2px solid rgba(255, 255, 255, 0.6);
          border-radius: 0.4rem;
          opacity: 0;
          transition: opacity 0.5s;
        }

        .image-gallery a::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.8);
          opacity: 0;
          transition: opacity 0.5s;
        }
        .image-gallery a:hover i,
        .image-gallery a:hover::before {
          opacity: 1;
        }
        .img-1 {
          grid-area: img-1;
          min-height: 51rem;
          background-image: url("./10.jpg");
        }
        .img-2 {
          grid-area: img-2;
          background-image: url("./2.jpg");
        }
        .img-3 {
          grid-area: img-3;
          background-image: url("./3.jpg");
        }
        .img-4 {
          grid-area: img-4;
          background-image: url("./4.jpg");
        }
        .img-5 {
          grid-area: img-5;
          background-image: url("./5.jpg");
        }
        .img-6 {
          grid-area: img-6;
          min-height: 51rem;
          background-image: url("./9.jpg");
        }
        .img-7 {
          grid-area: img-7;
          background-image: url("./7.jpg");
        }
        .img-8 {
          grid-area: img-8;
          background-image: url("./8.jpg");
        }
        @media screen and (max-width: 900px) {
          .image-gallery {
            grid-template-areas:
              "img-1 img-1 img-2 img-2"
              "img-1 img-1 img-3 img-3"
              "img-4 img-4 img-5 img-5"
              "img-6 img-7 img-7 img-7"
              "img-8 img-8 img-8 img-8";
          }

          .image-gallery a {
            height: 20rem;
          }
          .img-1 {
            min-height: 41.5rem;
          }
          .img-6 {
            min-height: 20rem;
          }
        }
        @media screen and (max-width: 600px) {
          .image-gallery {
            grid-template-areas:
              "img-1 img-1 img-1 img-1"
              "img-2 img-2 img-2 img-2"
              "img-3 img-3 img-3 img-3"
              "img-4 img-4 img-4 img-4"
              "img-5 img-5 img-5 img-5"
              "img-6 img-6 img-6 img-6"
              "img-7 img-7 img-7 img-7"
              "img-8 img-8 img-8 img-8";
          }

          .image-gallery a,
          .img-1,
          .img-6 {
            min-height: 30rem;
            height: 30rem;
          }
        }
      `}</style>
      <Head>
        <link
          href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <div className="image-gallery">
          <a href="./10.jpg" className="img-1">
            <i className="icon ion-md-expand"></i>
          </a>
          <a href="./2.jpg" className="img-2">
            <i className="icon ion-md-expand"></i>
          </a>
          <a href="./3.jpg" className="img-3">
            <i className="icon ion-md-expand"></i>
          </a>
          <a href="./4.jpg" className="img-4">
            <i className="icon ion-md-expand"></i>
          </a>
          <a href="./5.jpg" className="img-5">
            <i className="icon ion-md-expand"></i>
          </a>
          <a href="./9.jpg" className="img-6">
            <i className="icon ion-md-expand"></i>
          </a>
          <a href="./7.jpg" className="img-7">
            <i className="icon ion-md-expand"></i>
          </a>
          <a href="./8.jpg" className="img-8">
            <i className="icon ion-md-expand"></i>
          </a>
        </div>
      </div>
    </>
  );
}
