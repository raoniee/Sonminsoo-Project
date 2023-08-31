export type FandomType = {
    id: number;
    fandomName: string;
    memberLength: number;
    image: string;
    lastMessage: [{
        content: string;
        createdAt: string;
    }]
}

export type ChatImageType = {
    imageList: string[];
    setIsViewerOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    startSlideIndex?: number;
}

export type ChatMemberType = {
    $ban: boolean;
    userName: string;
}

export type ChatProps = {
    author: {
        id: number;
        nickName: string;
        image: string;
    }
    content: string;
    readCount?: number;
    createdAt: string;
    $visibleProfile?: boolean;   
    $visibleTime?: boolean;
}

export type ChatInputType = {
    ban: boolean;
    roomId: number;
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
}
