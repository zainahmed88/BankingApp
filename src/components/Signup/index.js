import React from 'react'
import { Button } from '../ButtonElement'
import Pic from '../../images/svg-5.svg'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from './SignupElements'

const SignUp = ({ imgStart, primary }) => {
  return (
    <>
      <InfoContainer lightBg id='signup'>
        <InfoWrapper>
          <InfoRow imgStart={imgStart ? 0 : 1}>
            <Column1>
              <TextWrapper>
                <TopLine>Join our Team</TopLine>
                <Heading darkText>
                  Creating and account is extremely easy
                </Heading>
                <Subtitle darkText>
                  Get everything set up and ready in under 10 minutes. All you
                  need to do is add your information and you're ready to go
                </Subtitle>
                <BtnWrap>
                  <Button
                    to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={primary ? 1 : 0}
                    dark2={primary ? 1 : 0}
                  >
                    Start now
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={Pic} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default SignUp
