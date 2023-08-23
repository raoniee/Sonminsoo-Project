import { styled } from "styled-components";
import SonMinsooItemInfo from "./SonMinsooItemInfo";
import { useOutletContext } from "react-router-dom";

const SonminsooItemListContainer = styled.div`
  width: 358px;
  margin: 21px auto 0 auto;
  padding: 0;
`;
const SonminsooItemsContainer = styled.div`
  width: 100%;
  height: 420px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const SonminsooItemTitle = styled.div`
  margin-bottom: 5px;
`;

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
    <SonminsooItemListContainer>
      <SonminsooItemTitle>손민수템</SonminsooItemTitle>
      <SonminsooItemsContainer>
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
      </SonminsooItemsContainer>
    </SonminsooItemListContainer>
  );
};
export default SonminsooItemList;
