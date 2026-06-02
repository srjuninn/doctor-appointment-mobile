import { SchedyuleCard } from "../../components/ScheduleCard"
import { Container, Greeatings, GreeatingsAvatar, GreeatingsSpan, GreeatingsText, GreeatingsTitle } from "./style"

export const Home = () => {
    return(
            <Container>
                <Greeatings>
                    <GreeatingsTitle>
                        <GreeatingsSpan>
                            hello
                        </GreeatingsSpan>
                        <GreeatingsText>
                            hi Jarvis
                        </GreeatingsText>
                    </GreeatingsTitle>
                    <GreeatingsAvatar source={require("../../assets/GreeatingsAvatar.png")}></GreeatingsAvatar>
                </Greeatings>
                <SchedyuleCard/>
            </Container>
    )
}