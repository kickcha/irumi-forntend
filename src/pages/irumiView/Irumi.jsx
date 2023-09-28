import React, { useEffect, useState } from "react";
import * as S from "./style";
import DetailLantern from "../../components/irumiView/DetailLantern";
import { Link, useParams } from "react-router-dom";
import BackBtn from "../../components/common/backBtn/BackBtn";
import { API } from "../../api/axios";

function IrumiView() {
  const { detailId } = useParams();
  // 내용
  const [lanternDetail, setLanternDetail] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(false);

  // get 해올거
  const fetchLanternDetailData = async () => {
    try {
      // const response = await API.get("/api/lanterns")
      const response = await API.get(`/api/lanterns/${detailId}`);
      setLanternDetail(response.data);
      setIsLiked(response.data.is_liked);
      setLikeCount(response.data.like_cnt);
      // results
      console.log(response.data);
      // console.log(lanternDetail);
    } catch (error) {
      console.log("각 id에 해당하는 연등 디테일 가져오는 중 에러 발생", error);
    }
  };
  useEffect(() => {
    // fetchLanternDetailData();
    setIsLiked(true);
    setLikeCount(3);
    setLanternDetail({
      id: 3,
      nickname: "20 김강민",
      content:
        "일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십",
      lanternColor: 1,
      light_bool: true,
      isLiked: true,
      likeCount: 2
    });
  }, [detailId]);

  return (
    <>
      <S.IrumiViewWrapper>
        <S.Header>
          <BackBtn />
        </S.Header>

        {[lanternDetail].map(item => (
          <DetailLantern
            key={item.id}
            data={item}
            isLiked={isLiked}
            setIsLiked={setIsLiked}
            likeCount={likeCount}
            setLikeCount={setLikeCount}
          />
        ))}
      </S.IrumiViewWrapper>
    </>
  );
}

export default IrumiView;
