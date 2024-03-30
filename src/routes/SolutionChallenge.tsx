import { Text } from "@chakra-ui/react";
import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Center, Square, Circle } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
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
      <Text fontSize="5xl"  color='#735240' >Sollution Challenge 2024 提出物</Text>
      <Box  w='100%'  p={4} color='#735240' >
      <Center fontSize='2xl'as='b'>SDGsビンゴについて</Center>
      <br />
      <Text fontSize='xl' as='samp'>SDGsビンゴは、SDGsの目標を達成するための行動をビンゴ形式で楽しく学べるゲームです
      </Text>
      <br />
      <Text fontSize='xl' as='samp'>アプリを起動し、ホーム画面にビンゴカードを表示します。画面に表示された数字をタップして、与えられたミッションをクリアしましょう!</Text>
      <br />
      <Text fontSize='xl' as='samp'>ミッションは、SDGsの目標に関連した行動をとったり、SDGsに関する知識を身につけたりするものです。縦、横、斜めに3枚「クリア」が出たらビンゴです</Text>
      <br />

      
      <Center fontSize='2xl'as='b'>遊び方</Center>
      <br />
      <Center fontSize='xl' as='samp'>1.アプリを起動して、メールアドレスとパスワードを登録します</Center>
      <br />
      <Center >
  <Image src='../images/SDGsBingoRegister.png'  w='235.5px' h='363px'/>
</Center>
      <Center fontSize='xl' as='samp'>2.ログイン画面に戻って、登録したメールアドレスとパスワードでログインする</Center>
      <br />
      <Center >
      <Image src='../images/SDGsBingoLogin.png'  w='235.5px' h='363px'/>
      </Center>
      <br />
      <Center fontSize='xl' as='samp'>3.画面に表示された数字をタップ。</Center>
      <br />
      <Center >
      <Image src='../images/SDGsBingohome.png'  w='233px' h='411px'/>
      </Center>
      <br />
      <Center fontSize='xl' as='samp'>4.ミッションをクリアしていたら、clearのボタンを押す。</Center>
      <br />
      <Center >
      <Image src='../images/SDGsBingogoal14.png'  w='186.5px' h='281px'/>
      </Center>
      <br />
      <Center fontSize='xl' as='samp'>5.ホーム画面の対応している数字のマスが開く</Center>
      <br />
      <Center >
      <Image src='../images/SDGsBingo1star.jpg'  w='233px' h='434px'/>
      </Center>
      <br />
      <Center fontSize='xl' as='samp'>6.五番のマスを押すか、フッターのstudyのアイコンのボタンを押すと通常のミッションとは違いstudyミッションが表示されます。SDGsに関連する記事を読み、指定された字数（30字）以上の要約を書くと、五番のマスを開けることができます</Center>
      <br />
      <Center >
      <Image src='../images/SDGsBingostudy1.jpg'  w='233px' h='439px'/>
      </Center>
      <br />
      <Center fontSize='xl' as='samp'>7.Click and LearnのボタンをクリックするとSDGsに関連する記事が表示されます</Center>
      <br />
      <Center >
      <Image src='../images/SDGsBingostudy2.jpg'  w='233px' h='443px'/>
      </Center>
      <br />
      <Center fontSize='xl' as='samp'>8.30字以上の要約を書きます</Center>
      <br />
      <Center >
      <Image src='../images/SDGsBingostudy3.jpg'  w='233px' h='442px'/>
      </Center>
      <br />
      <Center fontSize='xl' as='samp'>9.五番のマスが開きます</Center>
      <br />
      <Center >
      <Image src='../images/SDGsBingostar2.jpg'  w='233px' h='437px'/>
      </Center>
      <br />
      <Center fontSize='xl' as='samp'>10.縦、横、斜めどれか一列全てクリアするとビンゴになる。また最初からしたいときはresetボタンをクリックする</Center>
      <br />
      <Center >
      <Image src='../images/SDGsBingobingo.jpg'  w='233px' h='441px'/>
      </Center>
      <br />

      <Center>
      <Link  fontSize='2xl'as='b'href='https://rn-vn.github.io/solution-2024/' isExternal>
      このリンクからSDGsビンゴゲームのWebアプリケーションにアクセスできます
      <ExternalLinkIcon fontSize='2xl'as='b'/>
      </Link>

      </Center>

      
      </Box>      
<React.StrictMode>
      </React.StrictMode>
    </>
  );
};
