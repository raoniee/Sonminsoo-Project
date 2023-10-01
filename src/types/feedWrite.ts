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
export type OptionType = {
  value: string;
  label: string;
  id?: number;
};

export type itemtype = {
  id: number;
  imgUrl: string;
  title: string;
  price: string;
};

export type FeedWriteProps = {
  $updatePage: boolean;
  handleHeaderSubmit: () => void;
  isFormValid: boolean;
  updateFeed: any;
  moveToFandom: () => void;
};
export type FeedWriteFandomProps = {
  $updatePage: boolean;
  fandomOptions: OptionType[];
  setSelectedFandom: (option: OptionType) => void;
  selectedFandom: OptionType | null | undefined;
};
export type FeedWriteHashTagProps = {
  hashTagInput: string;
  handleHashTagChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export type FeedWriteLinkProps = {
  $updatePage: boolean;
  setLinkModalClick: React.Dispatch<React.SetStateAction<boolean>>;
  urlItem: itemtype[];
  feedData: FeedType | undefined;
};
export type FeedWriteTargetProps = {
  $updatePage: boolean;
  groupInput: string;
  setGroupInput: React.Dispatch<React.SetStateAction<string>>;
  artistInput: string;
  setArtistInput: React.Dispatch<React.SetStateAction<string>>;
  feedData: FeedType | undefined;
};
