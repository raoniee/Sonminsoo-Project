import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import axios, { axiosPrivate } from "../../api/axios";
import FeedHeaderWrite from "./FeedWriteHeader";
import WriteFandom from "./WriteFandom";
import FeedWriteHashTag from "./FeedWriteHashTag";
import FeedWriteLink from "./FeedWriteLink";
import FeedWriteTarget from "./FeedWriteTarget";
import * as S from "./style/NewFeed.style";
import useInput from "../../hooks/useInput";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import idol1 from "../../assets/images/png/idol1.png";

type OptionType = {
  value: string;
  label: string;
  id?: number;
};
const NewFeed = () => {
  const axiosPrivate = useAxiosPrivate();
  const [checked, setChecked] = useState<boolean>(false);
  const [contentInput, setContentInput] = useState<string>("");
  const [hashTagInput, handleHashTagChange] = useInput("");
  const [groupInput, setGroupInput] = useState<string>("");
  const [artistInput, setArtistInput] = useState<string>("");
  const [fandomOptions, setFandomOptions] = useState([]);
  const [selectedFandom, setSelectedFandom] = useState<OptionType | null>(null);

  const location = useLocation();

  const $updatePage = location.state?.isUpdate;
  const writeImg = location.state?.selectedImage;
  const selectImg = location.state?.imageObject;
  // #넣어입력하면 배열로 변환
  const hashtagss = hashTagInput.match(/#\w+/g) || [];

  useEffect(() => {
    fetchFandom();
  }, []);

  const handleContentInput = (e: any) => {
    setContentInput(e.target.value);
  };

  const fetchFandom = async () => {
    try {
      const response = await axiosPrivate.get("/users/fandoms");
      const fetchedFandoms = response.data.data.map((fandom: any) => ({
        value: fandom.fandomName,
        label: fandom.fandomName,
        id: fandom.id,
      }));
      setFandomOptions(fetchedFandoms);
    } catch (error) {
      console.error("Errore", error);
    }
  };

  const handleSubmitFeed = async () => {
    const formData = new FormData();

    formData.append("content", contentInput);
    hashtagss.forEach((tag) => {
      formData.append("hashTags", tag);
    });
    formData.append("groupName", groupInput);
    formData.append("artistName", artistInput);
    formData.append("fandomId", `${selectedFandom?.id}`);
    // formData.append("sonminsuItems", );
    if (selectImg) {
      formData.append("image", selectImg);
    }
    formData.forEach((value, key) => console.log(`${key}: ${value}`));
    try {
      const response = await axiosPrivate.post("/users/feeds", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };

  return (
    <>
      <FeedHeaderWrite $updatePage={$updatePage} />
      {$updatePage ? (
        <S.FeedWriteImage src={idol1} />
      ) : (
        <S.FeedWriteImage src={writeImg} onClick={handleSubmitFeed} />
      )}
      <WriteFandom
        $updatePage={$updatePage}
        fandomOptions={fandomOptions}
        setSelectedFandom={setSelectedFandom}
      />
      <S.FeedWriteContent
        placeholder="작성할 내용을 입력해 주세요.&#13;(정의로운 손민수 주의사항 내용 필요해 보임)"
        value={contentInput}
        onChange={handleContentInput}
      />
      {checked ? null : (
        <>
          <FeedWriteHashTag
            hashTagInput={hashTagInput}
            handleHashTagChange={handleHashTagChange}
          />
          <FeedWriteLink $updatePage={$updatePage} />
          <FeedWriteTarget
            $updatePage={$updatePage}
            grouptInput={groupInput}
            setGroupInput={setGroupInput}
            artistInput={artistInput}
            setArtistInput={setArtistInput}
          />
        </>
      )}
      {$updatePage ? null : (
        <S.NoticeText>
          <S.NoticeBtn
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          공지피드
        </S.NoticeText>
      )}
      {/* <LinkRegister /> */}
    </>
  );
};

export default NewFeed;
