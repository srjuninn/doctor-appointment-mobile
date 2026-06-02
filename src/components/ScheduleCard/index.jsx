import { Container, ScheduleBottom, ScheduleBottomContainer, ScheduleBottomIcon, ScheduleTop, ScheduleTopAvatar, ScheduleTopDescription, ScheduleTopIcon, ScheduleToplabel, ScheduleTopTitle } from "./style"

export const SchedyuleCard = () => {
    return(
        <Container>
            <ScheduleTop>
                <ScheduleTopAvatar/>
                <ScheduleTopTitle>
                    <ScheduleToplabel>Dr. Imiram Sayain</ScheduleToplabel>
                    <ScheduleTopDescription>General Doctor</ScheduleTopDescription>
                </ScheduleTopTitle>
                <ScheduleTopIcon/>
            </ScheduleTop>
            <ScheduleBottom>
                <ScheduleBottomContainer>
                    <ScheduleBottomIcon/>
                    <SheduleBottomTitle></SheduleBottomTitle>
                </ScheduleBottomContainer>
            </ScheduleBottom>
        </Container>
    )
}