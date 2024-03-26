import { Text } from "@chakra-ui/react";
import { Box } from '@chakra-ui/react'
import { useEffect, useRef } from "react";
import React from "react";
import './SolutionChallenge.css';
export const SolutionChallenge = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play();
  }, []);

  
  return (
    <>
    
      <Text fontSize="5xl" bg='#ddf0c6' color='#735240' >Sollution Challenge 2024 提出物</Text>
      <Box bg='#ddf0c6' w='100%'  p={4} color='#735240' >
      <Text fontSize='2xl'as='b'>SDGsビンゴについて</Text>
      <Text fontSize='xl'>SDGsビンゴは、SDGsの目標を達成するための行動をビンゴ形式で楽しく学べるゲームです!アプリを起動し、ホーム画面にビンゴカードを表示します。画面に表示された数字をタップして、与えられたミッションをクリアしましょう!ミッションは、SDGsの目標に関連した行動をとったり、SDGsに関する知識を身につけたりするものです。縦、横、斜めに3枚「クリア」が出たらビンゴです</Text>
      
      
      <h1>遊び方</h1>
<h1>1.アプリを起動します。</h1>
<h1>2.ホーム画面にビンゴカードを表示します。</h1>
<h1>3.画面に表示された数字をタップ。</h1>
<h1>4.ミッションをクリアする。</h1>
<h1>5.ビンゴカードの数字をクリアする。</h1>
<h1>6.最初からやり直したい場合はリセットボタンを押してください。</h1>
<h1>ミッション</h1>
<h1>SDGsの目標に関連した行動をしたり、SDGsに関する知識を身につけたりすること。</h1>
<h1></h1>例えば
「ペットボトルを捨てる
「エコバッグを使う
「SDGsに関する記事を読む
"SDGsの目標について調べる"
などのミッションが用意されている。
<h1>ビンゴカード</h1>
<h1>ビンゴカードには、SDGsの目標ごとに1から9までの数字が割り振られています。ミッションをクリアすると、割り当てられた番号がクリアされます。
クリアカードが縦、横、斜めに3枚揃うとビンゴです!</h1>
<h1>SDGsについて学ぶ</h1>
<h1>SDGsに関連する記事を読む 指定された文字数以上の要約を書くと、ビンゴカードが1枚クリアできます。SDGsについて知れば知るほど、ビンゴカードをクリアしやすくなります!</h1>

      
      </Box>      
<React.StrictMode>
      </React.StrictMode>
      
    </>
  );
};
