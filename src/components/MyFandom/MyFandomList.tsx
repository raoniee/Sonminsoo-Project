import * as S from "./style/MyFandomList.style";
import { useNavigate } from "react-router-dom";
import detailDate from "../../utils/time";
type FandomRankData = {
  fandomName: string;
  id: number;
  lastChatTime: null;
  memberLength: number;
  rank: number;
  image: string;
};

type FandomdataProps = {
  item: FandomRankData;
};

const MyFandomList: React.FC<FandomdataProps> = ({ item }) => {
  const navigate = useNavigate();
  const handleItemClick = () => {
    navigate(`/fandom/${item.id}`);
  };

  return (
    <S.MyFandomListContainer key={item.id} onClick={handleItemClick}>
      <S.CircleImg src={item?.image} />
      <S.RnakingTextBox>
        <S.FandomNameMemberBox>
          <S.FandomNameText>{item.fandomName}</S.FandomNameText>
          <S.MamberIcon />
          <S.MemberQuantity>{item.memberLength}</S.MemberQuantity>
        </S.FandomNameMemberBox>
        <S.ActivityTime>
          {" "}
          채팅활동{" "}
          {item?.lastChatTime ? detailDate(item?.lastChatTime) : "없음"}
        </S.ActivityTime>
      </S.RnakingTextBox>
    </S.MyFandomListContainer>
  );
};
export default MyFandomList;
