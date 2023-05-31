import React, { useState } from 'react'
import styled from 'styled-components'
import { IoIosArrowBack } from "react-icons/io";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import "./App.css"
import { Link } from 'react-router-dom';



const TextInput = ({ placeholder, onChange, value, bodyText, color }) => {
    return (

        <div style={{ marginBottom: "24px" }}>
            <InputDiv>

                <Text>
                    {bodyText}
                </Text>
                <ToggleDot />
            </InputDiv>
            <input
                type="text"
                style={{
                    width: "330px",
                    height: "48px",
                    borderRadius: "10px",
                    border: "1px solid rgba(227, 227, 227, 1)",
                    paddingLeft: "10px"

                }}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}







function PayInputUserData_WB14_Screen() {



    const today = new Date();
    const [name, setName] = useState("");
    const [dateOfIssue, setDateOfIssue] = useState("");
    const [phoneOfIssue, setPhoneOfIssue] = useState("");
    const [radio1, setRadio1] = useState("");

    const [agencyRadio1, setAgencyRadio1] = useState("");


    const handleRadioGroup1Change = (event) => {
        setRadio1(event.target.value);
    };

    const handleRadioGroup2Change = (event) => {
        setAgencyRadio1(event.target.value);
    };

    const [hipcDatas, setHipcDatas] = useState(null)
    const [hiqcDatas, setHiqcDatas] = useState(null)

    const authType = useLocation();
    const searchParams = new URLSearchParams(authType.search);

    let isApp = searchParams.get('number');
    console.log('isApp: ', isApp)

    const certificateType = isApp === "1" ? "kakao" : isApp === "2" ? "naver" : isApp === "3" ? "pass" : isApp === "4" ? "toss" : isApp === "5" ? "payco" : isApp === '6' ? "kika" : isApp === "7" ? "kb" : isApp === "8" ? "shinhan" : null
    // const mobilePhoneType = agencyRadio1 ? "K" : agencyRadio1 ? "S" : agencyRadio1 ? "L" : null
    // const residentRegistrationNumber = radio1 ? "Y" : radio1 ? "N" : null

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const headers = {
        "Content-Type": "application/json",
        //FIXME: .env 파일로 교체 필요
        "user-id": "hanwookk12",
        "hkey": "9c0f1783f3ef6741",
    }

    const currentDay = year + month + day


    const currentToDay = currentDay.slice(0, -2).toString();


    //TODO:: 로딩 로직 필요
    const hipcCertifiecateIssued = async () => {
        console.log("건강보험 납부 확인서")
        // navigation.navigate("Modal_AllLoading");//시작과 동시에 로딩 스크린 시작



        function getKoreanTwentyYear(dateOfBirth) {
            const birthYear = parseInt(dateOfBirth.substring(0, 4));
            const birthMonth = parseInt(dateOfBirth.substring(4, 6));
            const birthDay = parseInt(dateOfBirth.substring(6, 8));

            let twentyYear = birthYear + 19;

            // 생일이 지났는지 확인
            if (
                birthMonth > today.getMonth() + 1 ||
                (birthMonth === today.getMonth() + 1 && birthDay > today.getDate())
            ) {
                twentyYear--;
            }

            return twentyYear + "01";
        }

        let fromDate = getKoreanTwentyYear(dateOfIssue); // 수정: fromData에 반환된 값 할당



        const uriHIPC = "https://api.hyphen.im/in0002000467" //건강보험 납부확인서


        const userData = {
            "pdfYn": "N",
            "loginMethod": "EASY",
            "step": "init",
            "stepMode": "nostep",
            "cloudCertYn": "N",
            fromDate: fromDate,
            loginOrgCd: certificateType,
            resNm: name,
            resNo: dateOfIssue,
            mobileNo: phoneOfIssue,
            mobileCo: agencyRadio1,
            toDate: currentToDay,
        }





        try {

            console.log('reponse logic start')
            const response = await axios.post(uriHIPC, userData, { headers });


            setHipcDatas(response)

            window.ReactNativeWebView.postMessage(JSON.stringify({
                status: "SCC",
                data: hipcDatas
            }))

            // navigation.goBack();
            // hipcBackGroundFetchHandler()

        } catch (error) {
            // navigation.goBack();
            console.log("error: ", error);

            window.ReactNativeWebView.postMessage(JSON.stringify({
                status: "err",
                // errorMsg:  //에러 메세지 반환 추가 필요

            }))


        }
    }



    const 건강보험자격득실확인서 = async () => {

        const hiqcEndPoint = "https://api.hyphen.im/in0002000874"; //API and point


        const hiqData = {
            "pdfYn": "N",
            "loginMethod": "EASY",
            "step": "init",
            "stepMode": "nostep",
            "cloudCertYn": "N",
            loginOrgCd: certificateType,
            juminYn: radio1,
            resNm: name,
            resNo: dateOfIssue,
            mobileNo: phoneOfIssue,
            mobileCo: agencyRadio1,

        }

        try {

            const response = await axios.post(hiqcEndPoint, hiqData, { headers });



            console.log("건강보험자격득실 확인서 : ", response)


            setHiqcDatas(response)


            window.ReactNativeWebView.postMessage(JSON.stringify({
                status: "SCC",
                messeage: "hiqc",
                data: hiqcDatas
            }))





        } catch (error) {
            console.log("건강보험자격득실 확인서 ERR", error)

            window.ReactNativeWebView.postMessage(JSON.stringify({
                status: "error",
                // errorMsg:  //에러 메세지 반환 추가 필요
            }))
            // navigation.goBack();

        }
    }



    console.log('radio1: ', radio1)
    console.log('agencyRadio1: ', agencyRadio1)



    return (
        <Container>

            <BodyContainer>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Link to="/">
                        <IoIosArrowBack size={25} />
                    </Link>
                    <h3 style={{ fontWeight: 500 }}>정보 입력</h3>
                </div>
                <TextInput
                    placeholder={"Email@직접입력"}
                    bodyText={"이름"}
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                />
                <TextInput
                    placeholder={"8~16자 영문, 숫자, 특수문자"}
                    bodyText={"생년월일"}
                    value={dateOfIssue}
                    onChange={(e) => { setDateOfIssue(e.target.value) }}
                />
                <TextInput
                    placeholder={"전화번호를 입력하세요. (- 제외)"}
                    bodyText={"전화번호"}
                    value={phoneOfIssue}
                    onChange={(e) => { setPhoneOfIssue(e.target.value) }}
                />
                {isApp ?
                    <>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '8px'
                            }}
                        >
                            <Text>주민등록번호 표시</Text> <ToggleDot />
                        </div>
                        <RadioDiv>

                            <RadioSubDiv>
                                <input
                                    checked={setRadio1 === 'Y' ? true : null}
                                    onChange={handleRadioGroup1Change}
                                    style={{ width: 19, height: 19 }} type="radio" id="option1" name="options" value="Y" />
                                <Label
                                    style={{ fontSize: '14px' }}
                                    for="option1">전체 표시</Label>
                            </RadioSubDiv>
                            <RadioSubDiv>
                                <input
                                    checked={setRadio1 === 'N' ? true : null}
                                    onChange={handleRadioGroup1Change}
                                    style={{ width: 19, height: 19 }} type="radio" id="option2" name="options" value="N" />
                                <Label for="option2">일부 표시 (뒷자리는 *로 표시)</Label>
                            </RadioSubDiv>
                        </RadioDiv>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '8px'

                            }}
                        >
                            <Text>통신사</Text> <ToggleDot />
                        </div>
                        <RadioDiv>
                            <RadioSubDiv>
                                <input
                                    checked={setAgencyRadio1 === "KT" ? true : null}
                                    onChange={handleRadioGroup2Change}
                                    style={{ width: 19, height: 19 }} type="radio" id="option3" name="carrier" value="KT" />
                                <Label for="option3">KT</Label>
                            </RadioSubDiv>
                            <RadioSubDiv>
                                <input
                                    checked={setAgencyRadio1 === "SKT" ? true : null}
                                    onChange={handleRadioGroup2Change}
                                    style={{ width: 19, height: 19 }} type="radio" id="option4" name="carrier" value="SKT" />
                                <Label for="option4">SKT</Label>
                            </RadioSubDiv>
                            <RadioSubDiv>
                                <input
                                    checked={setAgencyRadio1 === "LG" ? true : null}
                                    onChange={handleRadioGroup2Change}
                                    style={{ width: 19, height: 19 }} type="radio" id="option5" name="carrier" value="LG" />
                                <Label for="option5">LG U+</Label>
                            </RadioSubDiv>
                        </RadioDiv>
                    </>
                    : null
                }



                <div style={{ marginTop: '106px' }}>
                    {/* <Button onClick={hipcCertifiecateIssued} >간편 인증</Button> */}
                    <Button onClick={window.ReactNativeWebView.postMessage(JSON.stringify({
                        status: "error",
                        // errorMsg:  //에러 메세지 반환 추가 필요
                    }))} >간편 인증</Button>
                </div>
            </BodyContainer>

        </Container>




    )
}


const Container = styled.div`
padding-top: 40px;
margin-left:15px;
display: flex;
flex: 1;
padding-left: 12px;
padding-right: 12px;
/* flex-direction: row; */
`

const BodyContainer = styled.div`
/* flex-direction: row;
justify-content: center;
align-items: center; */
`

const RadioDiv = styled.div`
display: flex;
justify-content: space-around;
align-items: center;

width: 336px;
height: 48px;
border-radius: 10px;
border: 1px solid rgba(227, 227, 227, 1);
margin-bottom: 24px;
`
const ToggleDot = styled.div`
margin-left: 4px;
width: 4px;
height: 4px;
border-radius: 2px;
background-color: #d82c2c;
`

const Text = styled.div`
font-size: 15px;
`
const InputDiv = styled.div`
display: flex;
align-items:center;
margin-bottom: 8px;

`

const Button = styled.button`
background-color: rgba(55, 105, 252, 1);
width: 336px;
height: 64px;
border-radius: 8px;
border: 1px solid rgba(55, 105, 252, 1);
font-size: 20px;
color: #FFFFFF;
`

const RadioSubDiv = styled.div`
display: flex;
text-align: center;
align-items: center;
/* justify-content: flex-end; */


`

const Label = styled.label`
font-size: 14px;

`


export default PayInputUserData_WB14_Screen