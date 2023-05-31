import React from 'react'
import styled from 'styled-components'
import vector from './assets/vector.png'

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
    return (
        <Container>

            <BodyContainer>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <img style={{
                        width: '11px', height: '19px',
                        //  marginLeft: '24px',
                        marginRight: '16px',
                        color: 'black'
                    }} src={vector} alt='Vector' /> <h3 style={{ fontWeight: 500 }}>정보 입력</h3>
                </div>
                <TextInput
                    placeholder={"Email@직접입력"}
                    bodyText={"이름"}
                />
                <TextInput
                    placeholder={"8~16자 영문, 숫자, 특수문자"}
                    bodyText={"생년월일"}
                />
                <TextInput
                    placeholder={"8~16자 영문, 숫자, 특수문자"}
                    bodyText={"전화번호"}
                />
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '8px'
                    }}
                >
                    <Text>생년월일</Text> <ToggleDot />
                </div>
                <RadioDiv>

                    <RadioSubDiv>
                        <input style={{ width: 19, height: 19 }} type="radio" id="option1" name="options" value="전체 표시" />
                        <Label
                            style={{ fontSize: '14px' }}
                            for="option1">전체 표시</Label>
                    </RadioSubDiv>
                    <RadioSubDiv>
                        <input style={{ width: 19, height: 19 }} type="radio" id="option2" name="options" value="일부 표시" />
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
                        <input style={{ width: 19, height: 19 }} type="radio" id="option3" name="options" value="option1" />
                        <Label for="option3">KT</Label>
                    </RadioSubDiv>
                    <RadioSubDiv>
                        <input style={{ width: 19, height: 19 }} type="radio" id="option4" name="options" value="option1" />
                        <Label for="option4">SKT</Label>
                    </RadioSubDiv>
                    <RadioSubDiv>
                        <input style={{ width: 19, height: 19 }} type="radio" id="option5" name="options" value="option1" />
                        <Label for="option5">LG U+</Label>
                    </RadioSubDiv>
                </RadioDiv>



                <div style={{ marginTop: '106px' }}>
                    <Button>간편 인증</Button>
                </div>
            </BodyContainer>

        </Container>




    )
}


const Container = styled.div`
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