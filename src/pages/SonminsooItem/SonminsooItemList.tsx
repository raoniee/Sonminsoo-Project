import SonMinsooItemInfo from "./SonMinsooItemInfo";
import * as S from "./style/SonminsooItemList.style";

const SonminsooItemList = () => {
  // const test = useOutletContext();
  // console.log(test, "contextTest");
  const testData = [
    {
      imgURL: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
      artistName: "전정국",
      title: "비행사 우주 뭐시기",
      bucket: ["default"],
      price: 12000,
    },
    {
      imgURL: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
      artistName: "국",
      title: "비행사 우주 뭐시기",
      bucket: ["default", "other"],
      price: 12000,
    },
    {
      imgURL: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
      artistName: "정",
      title: "비행사 우주 뭐시기",
      bucket: ["default"],
      price: 12000,
    },
    {
      imgURL: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
      artistName: "전",
      title: "비행사 우주 뭐시기",
      bucket: ["default"],
      price: 12000,
    },
    {
      imgURL: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
      artistName: "전정국",
      title: "비행사 우주 뭐시기",
      bucket: ["default"],
      price: 12000,
    },
    {
      imgURL: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
      artistName: "전정국",
      title: "비행사 우주 뭐시기",
      bucket: ["default"],
      price: 12000,
    },
    {
      imgURL: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
      artistName: "전정국",
      title: "비행사 우주 뭐시기",
      bucket: ["default"],
      price: 12000,
    },
    {
      imgURL: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
      artistName: "전정국",
      title: "비행사 우주 뭐시기",
      bucket: ["default"],
      price: 12000,
    },
    {
      imgURL: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
      artistName: "전정국",
      title: "비행사 우주 뭐시기",
      bucket: ["default"],
      price: 12000,
    },
    {
      imgURL: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
      artistName: "전정국",
      title: "비행사 우주 뭐시기",
      bucket: ["default"],
      price: 12000,
    },
  ];
  return (
    <S.SonminsooItemListContainer>
      <S.SonminsooItemTitle>손민수템</S.SonminsooItemTitle>
      <S.SonminsooItemsContainer>
        {testData.map((data, index) => {
          return (
            <SonMinsooItemInfo
              key={index}
              imgURL={data.imgURL}
              artistName={data.artistName}
              title={data.title}
              bucket={data.bucket}
              price={data.price}
            />
          );
        })}
      </S.SonminsooItemsContainer>
    </S.SonminsooItemListContainer>
  );
};
export default SonminsooItemList;
