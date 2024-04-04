import React from "react";
import { Box } from "@chakra-ui/react";
import ImageSlider from "../components/carousel";
import img1 from "../images/hazuki/itl_student_board1.jpg"
import img2 from "../images/hazuki/itl_student_board2.jpg";
import img3 from"../images/hazuki/itl_student_board3.jpg";
import "./iTLStudentBoard.css";

export const ITLStudentBoard = () => {
  const SlideData = [
    {
        image: img1,
    },
    {
        image: img2,
    },
    {
        image: img3,
    },
];
  return (
    <>
      <React.StrictMode>
      <div id="container">
      <h1>iTL Student Board</h1>
      <div className="subtitle">
      <p id="text1">~学内DX~</p>
      </div>
      <div id ="text-box">
        <div className="title2">
        <h2><span>『iTL Student Board』</span><span>とは？</span></h2>
        </div>
        <p>
          『iTL Student Board』は、iTL内の情報共有や学生同士の交流ができるプラットフォームです。
          iTLの学生にゼミや就活のことなどを匿名で気軽に質問したり、サークルやイベントなどの告知をしたりすることができます。
          また、フォロー・フォロワー機能やDM（ダイレクトメッセージ）機能があるので友達作りにも最適です。
          なお、登録は中央大学の全学メールのみ許可しているので、プライバシー面でも安心して利用できます。
          ぜひ、iTL生同士の交流の場としてご利用ください！！
           
        </p>
        <div className="title2">
        <h2>開発背景</h2>
        </div>
        <p>「iTLの学生同士の交流や情報交換の場が不足している問題を解決しよう」というのが開発のきっかけです。
            開発期間は約3か月。時間も掲示板機能やメッセージ機能を一から自分たちで作る技術力も足らなかったため、実装に当たっては『Word Press』を使用しました。
          また、実装に移る前にはしっかりと学生にどのような機能が欲しいかアンケートを実施。それにより、学生のニーズにあった機能を実装できました。
           
        </p>
        </div>
      <div id="slide">
      <Box w="90%" p={3} color="white" >
        <ImageSlider slides={SlideData} />
      </Box>
      </div>
      
      </div>
      </React.StrictMode>
    </>
  );
};
