export type bucketList = {
  id: number;
  img?: string;
  bucketName: string;
}[];

export type sonminsooItemInfo = {
  artistName: string;
  groupName: string;
  id: number;
  imgUrl: string;
  originUrl: string;
  price: string;
  title: string;
  isInMyBucket?: {
    bucketId: number;
  };
};
