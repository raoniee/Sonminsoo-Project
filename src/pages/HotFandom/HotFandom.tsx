import React, { useState, useEffect, createContext } from "react";
import axios from "../../api/axios";
import * as S from "./style/HotFandom.style";
import HotFandomCircle from "../../components/HotFandom/HotFandomCircle";
import HotFandomHeader from "../../components/HotFandom/HotFandomHeader";
import FandomRanking from "../../components/HotFandom/FandomRanking";

type Fandom = {
    fandomName: string;
    id: number;
    lastChatTime: null;
    memberLength: number;
    rank: number;
    thumbnailImgUrl: string;
};

type FandomData = Fandom[];

const HotFandom = () => {
    const [data, setData] = useState<FandomData>([]);

    //const [data, setData] = useState<HotFandomDataType | null>();
    // Home data get Effect
    useEffect(() => {
        initDataGet();
    }, []);

    // 랭크가 1위인 데이터는 넘버원 스테이트에 담기

    // 1번을 제외한 값을 담을 스테이트가 필요하다

    const initDataGet = async () => {
        try {
            const res = await axios.get(
                "http://146.56.143.108/api/v1/fandoms/hot"
            );
            console.log("get:", res.data.data);
            setData(res.data.data);
        } catch (error) {
            console.error("Error", error);
        }
    };

    const firstRank = data[0];
    const restRank = data.slice(1);

    return (
        <S.Container>
            <S.HotFandomContainer>
                <S.HeaderBox>
                    <HotFandomHeader />
                    {/* 1위 데이터 프룹으로 보내기 */}
                    <HotFandomCircle item={firstRank} />
                </S.HeaderBox>
                {restRank.map((item) => (
                    <FandomRanking key={item.id} item={item} />
                ))}

                {/* 맵 으로 데이터 뿌리고 프룹으로 데이터 넘기기 */}
            </S.HotFandomContainer>
        </S.Container>
    );
};
export default HotFandom;
