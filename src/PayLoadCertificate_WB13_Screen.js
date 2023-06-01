import React, { useState } from "react";
import styled, { css } from "styled-components";

import kakao from "./assets/AppLogo/kakao.png";
import kb from "./assets/AppLogo/kb.png";
import kika from "./assets/AppLogo/kika.png";
import naver from "./assets/AppLogo/naver.png";
import pass from "./assets/AppLogo/pass.png";
import payco from "./assets/AppLogo/payco.png";
import shinhan from "./assets/AppLogo/shinhan.png";
import toss from "./assets/AppLogo/toss.png";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const PayLoadCertificate_WB13_Screen = ({ navigation }) => {
  const [selectedBoxIndex, setSelectedBoxIndex] = useState("");

  // const privacyPolicy = "https://certifie-privacy-policy.vercel.app"; //개인정보 처리방침
  const handleBoxPress = (index) => {
    // 처리 로직
    setSelectedBoxIndex(index)
  };

  return (
    <ContentsCT>
      <PageTitleCT>
        <div onClick={() => {
          window.ReactNativeWebView.postMessage(JSON.stringify({
            data: "go Back"
          }))
        }}>
          <IoIosArrowBack size={25} />
        </div>
 
        <PageTitle>간편인증</PageTitle>
      </PageTitleCT>

      <BodyAreaCT>
        <BodyTextCT>
          <Body3>사용할 인증서를 선택해주세요.</Body3>
        </BodyTextCT>
        <AllBoxCT>
          <LineBoxCT>
            <BoxCT>

              <BoxBG>
                <ImageDiv
                  isSelected={selectedBoxIndex === 1}
                  onClick={() => handleBoxPress(1)}
                >
                  <img
                    alt="vector"
                    src={kakao}
                    style={{
                      width: 64,
                      height: 64,
                    }}
                  />
                </ImageDiv>
                <Body4>카카오 인증서</Body4>

              </BoxBG>
            </BoxCT>
            <BoxCT>
              <BoxBG
              >
                <ImageDiv
                  isSelected={selectedBoxIndex === 2}
                  onClick={() => handleBoxPress(2)}
                >
                  <img
                    alt="vector"
                    src={naver}
                    style={{
                      width: 64,
                      height: 64,
                    }}
                  />
                </ImageDiv>
                <Body4>네이버 인증서</Body4>
              </BoxBG>
            </BoxCT>
            <BoxCT>
              <BoxBG
              >
                <ImageDiv
                  isSelected={selectedBoxIndex === 3}
                  onClick={() => handleBoxPress(3)}
                >
                  <img
                    alt="vector"
                    src={pass}
                    style={{
                      width: 64,
                      height: 64,
                    }}
                  />
                </ImageDiv>
                <Body4>PASS 인증서</Body4>
              </BoxBG>
            </BoxCT>
          </LineBoxCT>
          <LineBoxCT>
            <BoxCT>
              <BoxBG>
                <ImageDiv
                  isSelected={selectedBoxIndex === 4}
                  onClick={() => handleBoxPress(4)}>
                  <img
                    src={toss}
                    alt="vector"

                    style={{
                      width: 64,
                      height: 64,
                    }}
                  />
                </ImageDiv>
                <Body4>TOSS 인증서</Body4>
              </BoxBG>
            </BoxCT>
            <BoxCT>
              <BoxBG>
                <ImageDiv
                  isSelected={selectedBoxIndex === 5}
                  onClick={() => handleBoxPress(5)}
                >
                  <img
                    alt="vector"
                    src={payco}
                    style={{
                      width: 64,
                      height: 64,
                    }}
                  />
                </ImageDiv>
                <Body4>PAYCO 인증서</Body4>
              </BoxBG>
            </BoxCT>
            <BoxCT>
              <BoxBG>

                <ImageDiv
                  isSelected={selectedBoxIndex === 6}
                  onClick={() => handleBoxPress(6)}
                >
                  <img
                    alt="vector"
                    src={kika}
                    style={{
                      width: 64,
                      height: 64,
                    }}
                  />
                </ImageDiv> <div></div>
                <Body4>삼성 패스</Body4>
              </BoxBG>
            </BoxCT>
          </LineBoxCT>
          <LastLineBoxCT>
            <BoxCT>
              <BoxBG>
                <ImageDiv
                  isSelected={selectedBoxIndex === 7}
                  onClick={() => handleBoxPress(7)}>
                  <img
                    alt="vector"
                    src={kb}
                    style={{
                      width: 64,
                      height: 64,
                    }}
                  />
                </ImageDiv>
                <Body4>KB 스타뱅킹</Body4>
              </BoxBG>

            </BoxCT>
            <BoxCT>
              <BoxBG>
                <ImageDiv
                  isSelected={selectedBoxIndex === 8}
                  onClick={() => handleBoxPress(8)}
                >
                  <img
                    alt="vector"
                    src={shinhan}
                    style={{
                      width: 64,
                      height: 64,
                    }}
                  />
                </ImageDiv>
                <Body4>신한 인증서</Body4>
              </BoxBG>
            </BoxCT>
            <BoxCT>
              <BoxBG></BoxBG>
              <Body4 style={{ color: "white" }}>카카오 인증서</Body4>
            </BoxCT>
          </LastLineBoxCT>
        </AllBoxCT>

        <InfoCT>
          <div>
            <Body4>※ 본인 명의의 인증서로 본인 인증이 가능합니다.</Body4>
            <Body4>※ 간편인증은 해당 인증서의 앱 설치 후 진행 가능합니다.</Body4>
            <Body4>※ 금융인증서는 각 은행에서 발급이 가능합니다.</Body4>
            <Body4>※ 입력한 고객 정보는 간편인증을 위해서만 활용합니다.</Body4>
          </div>
        </InfoCT>

      </BodyAreaCT>
      <BasicButtonCT>
        <HelpCT>
          <Body4>고객지원 : help@certifie.io</Body4>
          <Divider />

          <TextButton>
            개인정보처리방침
          </TextButton>
        </HelpCT>
        <Link
          to={`./info?number=${selectedBoxIndex}`}
        >
          <BasicButton

          // property={selectedBoxIndex === "" ? "disabled" : null}
          // onClick={authenticationSend}
          >확인</BasicButton>
        </Link>

      </BasicButtonCT>
    </ContentsCT>
  );
};

const Body3 = styled.div`
  font-size: 14px;
`;

const Body4 = styled.div`


  font-size: 12px;
`;

const ContentsCT = styled.div`

  /* flex: 1; */
  /* justify-content: space-between; */
  /* align-items: center; */
  background-color: #fcfcfc;
  padding-top: 25px;
`;

const PageTitleCT = styled.div`
display: flex;
flex-direction: row;
align-items: center;
  padding-top: 54px;
  padding-left: 24px;
  margin-bottom: 30px;
  /* padding-right: 24px; */
  /* height: 100px; */
`;

const PageTitle = styled.div`
  /* padding-top: 64px;
  padding-left: 24px;
  padding-right: 24px;
  height: 100px; */
`;

const BodyAreaCT = styled.div`
/* display: flex; */
  /* flex: 1; */
  padding-top: 36px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 32px;

  /* align-items: center; */

`;

const BodyTextCT = styled.div`
  justify-content: flex-start;
  width: 327px;
  margin-bottom: 24px;
`;

const AllBoxCT = styled.div`
  flex-direction: column;
  width: 327px;
  margin-bottom: 80px;
`;

const LineBoxCT = styled.div`
display: flex;
  flex-direction: row;

  justify-content: space-around;
  margin-bottom: 16px;
`;

const LastLineBoxCT = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-around;

`;

const BoxCT = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BoxBG = styled.div`
  margin-bottom: 8px;

  align-items: center;
  justify-content: center;
  text-align: center;

`;



const InfoCT = styled.div`

display: flex;
/* flex-direction: row; */
align-items: center;
justify-content: center;
  /* width: 327px; */
  color:rgba(170, 170, 170, 1);

`;

const HelpCT = styled.div`
display: flex;
  flex-direction: row;
  margin-top: 8px;
  width: 327px;

  /* align-items: center; */
  justify-content: center;
  color:rgba(170, 170, 170, 1);
  margin-bottom: 8px;
`;

const TextButton = styled.div`
  font-size: 12px;
`;

const BasicButtonCT = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  margin-bottom: 64px;

`;

const BasicButton = styled.button`
  width: 320px;
  height: 64px;
  background-color: #3769FC;
  font-size: 20px;
  font-weight: 600;
  color: #FFFFFF;
  border-radius: 8px;
  border: 1px solid #3769FC;

`;

const Divider = styled.div`
  width: 1px;
  height: 12px;
  background-color: #fcfcfc;
  margin-left: 4px;
  margin-right: 4px;
`;

const ImageDiv = styled.div`

border: 5px solid ;
  border-color: ${({ isSelected }) =>
    isSelected ? "#94BAFD" : "transparent"};
  border-radius: ${({ isSelected }) =>
    isSelected
      ? css`
          10px
        `
      : "transparent"};
`

export default PayLoadCertificate_WB13_Screen;