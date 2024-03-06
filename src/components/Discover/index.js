import React from 'react'
import { Button } from '../ButtonElement'
import Pic from '../../images/svg-7.svg'
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
} from './DiscoverElements'

const Discover = ({ imgStart, primary }) => {
  return (
    <>
      <InfoContainer lightBg id='discover'>
        <InfoWrapper>
          <InfoRow imgStart={imgStart ? 0 : 1}>
            <Column1>
              <TextWrapper>
                <TopLine>Unlimted Access</TopLine>
                <Heading darkText>Login to your account at any time</Heading>
                <Subtitle darkText>
                  We have got you covered no matter where you are located. All
                  you need is an internet connection and a phone or computer
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
                    Learn more
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

export default Discover
