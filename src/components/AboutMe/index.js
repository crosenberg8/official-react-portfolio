import React from 'react'
import {
    AboutMeContainer,
    HeaderContainer,
    Header,
    ImgContainer,
    Img,
    SummaryContainer,
    Summary,
    SubHeader,
    TestamentContainer,
    FriendName,
    FriendQuote,
    GridContainer
} from './AboutMeElements'
import techTowerPhoto from "../../images/connor-tech-tower.jpg"
import ImageSlider from '../ImageSlider/ImageSlider'
import { SliderData } from '../ImageSlider/SliderData'
import { shivamData, garrettData, adithyaData } from './Data'
import { itemWLogoArray } from '../GridItemWLogo/Data'
import { itemWOLogoArray } from '../GridItemWOLogo/Data'
import GridItemWLogo from '../GridItemWLogo'
import GridItemWOLogo from '../GridItemWOLogo'

const AboutMe = () => {
    return (
        <>
            <AboutMeContainer>
                <HeaderContainer>
                    <Header>Education & Honors</Header>
                </HeaderContainer>
                <ImgContainer>
                    <Img src={techTowerPhoto} />
                </ImgContainer>
                <SummaryContainer>
                    <Summary>
                        I am a <b>3rd year Computer Science major</b>, studying to earn a bachelor's degree from the <b>Georgia Institute of Technology</b>'s College of Computing. I originally entered Georgia Tech as a Mechanical Engineering major, but I switched as soon as I took my first CS class.
                        <br></br>
                        <br></br>
                        Upon my acceptance to Tech, <b>I was chosen to be 1 of only 6 students in my accepted class, to receive the extremely generous, GodBold Family Foundation, full-ride scholarship</b>. It covers 8 full semesters of tuition, housing, meal plans, and more! I wouldn’t have been able to attend Tech without it, which is why I am the utmost grateful for it
                    </Summary>
                </SummaryContainer>
                <HeaderContainer>
                    <Header>So... what kind of person am I?</Header>
                </HeaderContainer>
                <SubHeader>While I <i>COULD</i> go and summarize who I am in a short paragraph or two... thats kinda lame.... So, let’s see what my amazing friends have to say!!</SubHeader>
                <ImageSlider slides={SliderData} />
                <TestamentContainer>
                    <FriendName>{garrettData.friendName}</FriendName>
                    <FriendQuote>" {garrettData.friendQuote} "</FriendQuote>
                    <FriendName>{shivamData.friendName}</FriendName>
                    <FriendQuote>" {shivamData.friendQuote} "</FriendQuote>
                    <FriendName>{adithyaData.friendName}</FriendName>
                    <FriendQuote>" {adithyaData.friendQuote} "</FriendQuote>
                </TestamentContainer>
                <SubHeader><i>Thanks guys!! :) </i> Alright, to finish this section out, I would also say that I am ...</SubHeader>
                <GridContainer>
                    {itemWOLogoArray.map((value, index) => {
                        return (
                            <GridItemWOLogo {...value} />
                        )
                    })}
                </GridContainer>
                <SubHeader>BONUS!! Here are some of my interests! Click on them to learn/see more!</SubHeader>
                <GridContainer>
                    {itemWLogoArray.map((value, index) => {
                        return (
                            <GridItemWLogo {...value} />
                        )
                    })}
                </GridContainer>
            </AboutMeContainer>
        </>
    )
}

export default AboutMe
