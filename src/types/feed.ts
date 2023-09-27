export type FeedType = {
  id: number;
  content: string;
  createdAt: string;
  author: {
    id: number;
    image: string;
    nickName: string;
  };
  fandom: {
    id: number;
    fandomName: string;
  };
  sonminsuItems: SonminsuItem[];
  image: string;
  tags: string[];
  comments: number;
  groupName: string;
  artistName: string;
  likes: number;
  isLike: boolean;
};

export type SonminsuItem = {
  id: number;
  originUrl: string;
  title: string;
  price: number;
  imgUrl: string;
  groupName: string;
  artistName: string;
};
export type SonminsooItemType = {
  id: number;
  originUrl: string;
  title: string;
  price: number;
  imgUrl: string;
  groupName: string;
  artistName: string;
  isInBucket: boolean;
  createdAt: string;
};

export type FeedAuthor = {
  id: number;
  image: string;
  nickName: string;
};

export type FeedFandom = {
  fandomName: string;
};

export type FeedsType = FeedType[];

export type FeedProps = {
  feedData: FeedType;
};

export type FeedHeaderProps = {
  feedId: number;
  author: FeedAuthor;
  fandom: FeedFandom;
  createdAt: string;
  setIsFeedDelete: React.Dispatch<React.SetStateAction<boolean>>;
};

export type FeedTextProps = {
  content: string;
};

export type FeedHashTagsProps = {
  hashTags: string[];
};
export type FeedItemProps = {
  feedItems: number[];
};

export type CommentBoxProps = {
  feedId: number;
  comments: number;
};
export type CommentBtnProps = {
  commentOpen: () => void;
  commentClicked: boolean;
  commentsNum: number;
};

export type CommentType = {
  id: number;
  feedId: number;
  createdAt: string;
  content: string;
  parent: number;
  author: {
    id: number;
    image: string;
    nickName: string;
  };
  replies?: {};
};
