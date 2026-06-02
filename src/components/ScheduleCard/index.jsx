import { Container, ScheduleBottom, ScheduleBottomContainer, ScheduleBottomIcon, ScheduleBottomTitle, ScheduleTop, ScheduleTopContent , ScheduleTopAvatar, ScheduleTopDescription, ScheduleTopIcon, ScheduleToplabel, ScheduleTopTitle } from "./style"

export const SchedyuleCard = () => {
    return(
        <Container>
            <ScheduleTop>
                <ScheduleTopContent>
                    <ScheduleTopAvatar source={require("../../assets/doctorAvatarImage.png")}/>
                    <ScheduleTopTitle>
                        <ScheduleToplabel>Dr. Imiram Sayain</ScheduleToplabel>
                        <ScheduleTopDescription>General Doctor</ScheduleTopDescription>
                    </ScheduleTopTitle>
                </ScheduleTopContent>
                <ScheduleTopIcon source={require("../../assets/arrowRight.png")}/>
            </ScheduleTop>
            <ScheduleBottom>
                <ScheduleBottomContainer>
                    <ScheduleBottomIcon source={require("../../assets/calendar.png")}/>
                    <ScheduleBottomTitle></ScheduleBottomTitle>
                </ScheduleBottomContainer><ScheduleBottomContainer>
                    <ScheduleBottomIcon source={require("../../assets/clock.png")}/>
                    <ScheduleBottomTitle></ScheduleBottomTitle>
                </ScheduleBottomContainer>
            </ScheduleBottom>
        </Container>
    )
}