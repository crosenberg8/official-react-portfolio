import React from 'react'
import {
    ProjectsContainer,
    ImgContainer,
    Img,
    SummaryContainer,
    Summary,
    SkillsContainer,
    SkillsUsed,
    SkillsList,
    Skill,
    ProjectLinkContainer,
    ProjectLink,
    Header,
    HeaderContainer,
    VideoContainer,
    VideoHeader,
    Video
} from './ProjectElements'

const ProjectSection = ({ id, header, img, imgHeight, videoHeader, imgWidth, summary, skills, projectLinkDesc, projectLinkUrl }) => {
    return (
        <>
            <ProjectsContainer id={id}>
                <HeaderContainer>
                    <Header>{header}</Header>
                </HeaderContainer>
                <ImgContainer>
                    <Img src={img} height={imgHeight} width={imgWidth} />
                </ImgContainer>
                <VideoContainer>
                    <VideoHeader>{videoHeader}</VideoHeader>
                    <Video>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/T9NVd0219eU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Video>
                </VideoContainer>
                <SummaryContainer>
                    <Summary><b>Summary: </b>{summary}</Summary>
                </SummaryContainer>
                <SkillsContainer>
                    <SkillsUsed><b>Skills Used: </b></SkillsUsed>
                    <SkillsList>
                        {skills.map((skillValue, index) => {
                            return (<Skill key={index}>{skillValue}</Skill>)
                        })}
                    </SkillsList>
                </SkillsContainer>
                <ProjectLinkContainer>
                    <ProjectLink href={projectLinkUrl}>{projectLinkDesc}</ProjectLink>
                </ProjectLinkContainer>
            </ProjectsContainer>
        </>
    )
}

export default ProjectSection
