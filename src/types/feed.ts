export type Data = {
  id: number;
  content: string;
  createdAt: string; // 더 정확한 날짜 처리를 원한다면 Date 또는 string 대신 'Date' 타입을 사용하세요.
  author: {
    id: number;
    image: string;
    nickName: string;
  };
  fandom: {
    id: number;
    fandomName: string;
  };
  sonminsuItems: any[]; // sonminsuItems의 구체적인 항목을 모르므로 any[]로 지정했습니다. 필요에 따라서 수정하세요.
  image: string;
  tags: string[];
  comments: number;
};
export type DataArray = Data[];

//props type
export type FeedDataProps = {
  feedData: Data;
  setIsFeedDelete: React.Dispatch<React.SetStateAction<boolean>>;
};

export type FeedItemProps = {
  feedData: Data;
};

export type FeedTextProps = {
  feedData: {
    content: string;
  };
};

export type FeedHashTagProps = {
  feedData: {
    tags: string[];
  };
};

export type CommentBtnProps = {
  commentOpen: () => void;
  commentClicked: boolean;
  feedData: Data;
};
