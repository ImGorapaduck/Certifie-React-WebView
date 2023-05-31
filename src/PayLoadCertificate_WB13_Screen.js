import React, { useState } from "react";
import styled, { css } from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import kakao from "./assets/AppLogo/kakao.png";
import kb from "./assets/AppLogo/kb.png";
import kika from "./assets/AppLogo/kika.png";
import naver from "./assets/AppLogo/naver.png";
import pass from "./assets/AppLogo/pass.png";
import payco from "./assets/AppLogo/payco.png";
import shinhan from "./assets/AppLogo/shinhan.png";
import toss from "./assets/AppLogo/toss.png";

const PayLoadCertificate_WB13_Screen = ({ navigation }) => {
  const [selectedBoxIndex, setSelectedBoxIndex] = useState("");

  const privacyPolicy = "https://certifie-privacy-policy.vercel.app"; //개인정보 처리방침

  const authenticationSend = () => {
    if (abled) {
      return;
    }
    navigation.navigate("InputUserData", { isApp: selectedBoxIndex });
  };

  // const openUrl = async (url) => {
  //   // URL을 열기 전에, 해당 URL이 유효한지 확인합니다.
  //   console.log(url);
  //   const supported = await Linking.canOpenURL(url);
  //   if (supported) {
  //     // URL을 열어줍니다.
  //     await Linking.openURL(url);
  //   } else {
  //     console.log(`지원하지 않는 URL입니다: ${url}`);
  //   }
  // };

  const handleBoxPress = (index) => {
    setSelectedBoxIndex(index);
  };

  const abled = selectedBoxIndex === "";

  return (
    <ContentsCT>
      <PageTitleCT>
        <PageTitle onPress={() => navigation.goBack()}>간편인증</PageTitle>
      </PageTitleCT>

      <BodyAreaCT>
        <BodyTextCT>
          <Body3>사용할 인증서를 선택해주세요.</Body3>
        </BodyTextCT>
        <AllBoxCT>
          <LineBoxCT>
            <BoxCT>
              <BoxBG
                isSelected={selectedBoxIndex === 0}
                onPress={() => handleBoxPress(0)}
              >
                <img
                  src={kakao}
                  style={{
                    width: 64,
                    height: 64,
                  }}
                />
              </BoxBG>
              <Body4>카카오 인증서</Body4>
            </BoxCT>
            <BoxCT>
              <BoxBG
                isSelected={selectedBoxIndex === 1}
                onPress={() => handleBoxPress(1)}
              >
                <img
                  src={naver}
                  style={{
                    width: 64,
                    height: 64,
                  }}
                />
              </BoxBG>
              <Body4>네이버 인증서</Body4>
            </BoxCT>
            <BoxCT>
              <BoxBG
                isSelected={selectedBoxIndex === 2}
                onPress={() => handleBoxPress(2)}
              >
                <img
                  src={pass}
                  style={{
                    width: 64,
                    height: 64,
                  }}
                />
              </BoxBG>
              <Body4>PASS 인증서</Body4>
            </BoxCT>
          </LineBoxCT>
          <LineBoxCT>
            <BoxCT>
              <BoxBG
                isSelected={selectedBoxIndex === 3}
                onPress={() => handleBoxPress(3)}
              >
                <img
                  src={toss}
                  style={{
                    width: 64,
                    height: 64,
                  }}
                />
              </BoxBG>
              <Body4>TOSS 인증서</Body4>
            </BoxCT>
            <BoxCT>
              <BoxBG
                isSelected={selectedBoxIndex === 4}
                onPress={() => handleBoxPress(4)}
              >
                <img
                  src={payco}
                  style={{
                    width: 64,
                    height: 64,
                  }}
                />
              </BoxBG>
              <Body4>PAYCO 인증서</Body4>
            </BoxCT>
            <BoxCT>
              <BoxBG
                isSelected={selectedBoxIndex === 5}
                onPress={() => handleBoxPress(5)}
              >
                <img
                  src={kika}
                  style={{
                    width: 64,
                    height: 64,
                  }}
                />
              </BoxBG>
              <Body4>삼성 패스</Body4>
            </BoxCT>
          </LineBoxCT>
          <LastLineBoxCT>
            <BoxCT>
              <BoxBG
                isSelected={selectedBoxIndex === 6}
                onPress={() => handleBoxPress(6)}
              >
                <img
                  src={kb}
                  style={{
                    width: 64,
                    height: 64,
                  }}
                />
              </BoxBG>
              <Body4 color={black}>KB 스타뱅킹</Body4>
            </BoxCT>
            <BoxCT>
              <BoxBG
                isSelected={selectedBoxIndex === 7}
                onPress={() => handleBoxPress(7)}
              >
                <img
                  src={shinhan}
                  style={{
                    width: 64,
                    height: 64,
                  }}
                />
              </BoxBG>
              <Body4>신한 인증서</Body4>
            </BoxCT>
            <BoxCT>
              <BoxBG></BoxBG>
              <Body4 style={{ color: "white" }}>카카오 인증서</Body4>
            </BoxCT>
          </LastLineBoxCT>
        </AllBoxCT>

        <InfoCT>
          <Body4>※ 본인 명의의 인증서로 본인 인증이 가능합니다.</Body4>
          <Body4>※ 간편인증은 해당 인증서의 앱 설치 후 진행 가능합니다.</Body4>
          <Body4>※ 금융인증서는 각 은행에서 발급이 가능합니다.</Body4>
          <Body4>※ 입력한 고객 정보는 간편인증을 위해서만 활용합니다.</Body4>
        </InfoCT>
        <HelpCT>
          <Body4>고객지원 : help@certifie.io</Body4>
          <Divider />
          <TextButton
            onPress={() => {
              openUrl(privacyPolicy);
            }}
          >
            개인정보처리방침
          </TextButton>
        </HelpCT>
      </BodyAreaCT>
      <BasicButtonCT>
        <BasicButton
          text={"인증"}
          property={selectedBoxIndex === "" ? "disabled" : null}
          onPress={authenticationSend}
        />
      </BasicButtonCT>
    </ContentsCT>
  );
};

const Body3 = styled.div`
  font-size: 14pt;
`;

const Body4 = styled.div`
  font-size: 12pt;
`;

const ContentsCT = styled.div`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.Gray5};
`;

const PageTitleCT = styled.div`
  padding-top: ${({ HEIGHT }) => HEIGHT * 0.077}px;
  padding-left: ${({ theme }) => theme.Spacing.xl}px;
  padding-right: ${({ theme }) => theme.Spacing.xl}px;
  height: ${({ HEIGHT }) => HEIGHT * 0.12}px;
`;

const PageTitle = styled.div`
  padding-top: ${({ HEIGHT }) => HEIGHT * 0.077}px;
  padding-left: ${({ theme }) => theme.Spacing.xl}px;
  padding-right: ${({ theme }) => theme.Spacing.xl}px;
  height: ${({ HEIGHT }) => HEIGHT * 0.12}px;
`;

const BodyAreaCT = styled.div`
  flex: 1;
  padding-top: ${({ theme }) => theme.Spacing.xs * 9}px;
  padding-left: ${({ theme }) => theme.Spacing.xl}px;
  padding-right: ${({ theme }) => theme.Spacing.xl}px;
  padding-bottom: ${({ theme }) => theme.Spacing.xxl}px;
  align-items: center;
`;

const BodyTextCT = styled.div`
  justify-content: flex-start;
  width: ${({ theme }) => theme.Column.C6}px;
  margin-bottom: ${({ theme }) => theme.Spacing.xl}px;
`;

const AllBoxCT = styled.div`
  flex-direction: column;
  width: ${({ theme }) => theme.Column.C5}px;
  margin-bottom: ${({ theme }) => theme.Spacing.xxxl * 2}px;
`;

const LineBoxCT = styled.div`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.Spacing.l}px;
`;

const LastLineBoxCT = styled.div`
  flex-direction: row;
  justify-content: space-between;
`;

const BoxCT = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BoxBG = styled.TouchableOpacity`
  margin-bottom: ${({ theme }) => theme.Spacing.s}px;
  border-width: 5px;
  border-color: ${({ isSelected }) => (isSelected ? "#94BAFD" : "transparent")};
  border-radius: ${({ isSelected, theme }) =>
    isSelected
      ? css`
          ${theme.Spacing.m}px
        `
      : "transparent"};
`;

const InfoCT = styled.div`
  width: ${({ theme }) => theme.Column.C6}px;
`;

const HelpCT = styled.div`
  flex-direction: row;
  margin-top: ${({ theme }) => theme.Spacing.s}px;
  width: ${({ theme }) => theme.Column.C6}px;
  align-items: center;
`;

const TextButton = styled.div`
  font-size: 12pt;
`;

const BasicButtonCT = styled.div`
  margin-bottom: ${({ theme }) => theme.Spacing.xxl * 2}px;
`;

const BasicButton = styled.div`
  width: 320px;
  height: 64px;
  background-color: aqua;
  font-size: 20pt;
  color: black;
  border-radius: 8px;
`;

const Divider = styled.div`
  width: ${({ theme }) => theme.Spacing.xxs * 0.5}px;
  height: ${({ theme }) => theme.Spacing.m}px;
  background-color: ${({ theme }) => theme.Colors.Gray1};
  margin-left: ${({ theme }) => theme.Spacing.xs}px;
  margin-right: ${({ theme }) => theme.Spacing.xs}px;
`;

export default PayLoadCertificate_WB13_Screen;
