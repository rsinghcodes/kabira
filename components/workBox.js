import Title from "./title";
import SubTitle from "./subTitle";
import ImgBox from "./ImgBox";
import Image from "./Reusables/Image";
import Link from "next/link";

export default function workBox(props) {
  const {
    title,
    subTitle,
    imgOneSrc,
    imgOneAlt,
    imgTwoSrc,
    imgTwoAlt,
    imgThreeSrc,
    imgThreeAlt,
    imgFourSrc,
    imgFourAlt,
  } = props;
  return (
    <>
      <style jsx>{`
        .bx {
          font-size: 1.5rem;
        }
      `}</style>
      <div className="relative">
        <Title className="block text-center mt-14" value={title} />
        <SubTitle className="block text-center mt-2" value={subTitle} />
        <hr className="my-6" />
        <ImgBox className="pt-4">
          <Image src={imgOneSrc} alt={imgOneAlt} />
          <Image src={imgTwoSrc} alt={imgTwoAlt} />
          <Image src={imgThreeSrc} alt={imgThreeAlt} />
          <Image src={imgFourSrc} alt={imgFourAlt} />
        </ImgBox>
      </div>
    </>
  );
}
