import React from 'react'
import { Button } from '../ButtonElement'
import Pic from '../../images/svg-1.svg'
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
} from './InfoElement'

const Info = ({ imgStart, primary }) => {
  return (
    <>
      <InfoContainer darkBg id='about'>
        <InfoWrapper>
          <InfoRow imgStart={imgStart ? 1 : 0}>
            <Column1>
              <TextWrapper>
                <TopLine>Premium Bank</TopLine>
                <Heading lightText>
                  Unlimited Transactions with zero fees
                </Heading>
                <Subtitle lightText>
                  Get access to our exclusive app that allows you to send
                  unlimited transactions without getting charged any fees
                </Subtitle>
                <BtnWrap>
                  <Button
                    to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 0 : 1}
                    dark={primary ? 0 : 1}
                    dark2={primary ? 0 : 1}
                  >
                    Get started
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

export default Info
