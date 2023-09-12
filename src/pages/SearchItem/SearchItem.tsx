import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import * as S from "./style/SearchItem.style";
import SearchItemHeader from "../../components/SearchItem/SearchItemHeader";
import MinsooItem from "../../components/SearchItem/MinsooItem";
import { sonminsooItemInfo } from "../SonminsooItem/types/SonminsooItem.type";

const SearchItem = () => {
  const [minsooItem, setMinsooItem] = useState<sonminsooItemInfo[]>([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    fetchItem();
  }, []);
  const fetchItem = async () => {
    try {
      const response = await axios.get(
        `/sonminsu-items/search?search=${encodeURIComponent(searchItem)}`
      );
      setMinsooItem(response.data.data);
    } catch (error) {}
  };

  return (
    <S.SearchItemContainer>
      <SearchItemHeader
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        fetchItem={fetchItem}
      />
      <S.SearchItemList>
        <MinsooItem minsooItem={minsooItem} />
      </S.SearchItemList>
    </S.SearchItemContainer>
  );
};

export default SearchItem;
