import React from 'react'
import { ProjectsContainer,
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
    HeaderContainer
} from './ProjectElements'

const ProjectSection = ({id, header, img, imgHeight, imgWidth, summary, skills, projectLinkDesc, projectLinkUrl}) => {
    return (
        <>
            <ProjectsContainer id={id}>
                <HeaderContainer>
                    <Header>{header}</Header>
                </HeaderContainer>
                <ImgContainer>
                    <Img src={img} height={imgHeight} width={imgWidth}/>
                </ImgContainer>
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
