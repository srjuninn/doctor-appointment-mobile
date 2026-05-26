import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    padding: 64px 24px;
    flex: 1;
    background-color: #f9f9f9;

`

export const Greeatings = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const GreeatingsTitle = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
`
export const GreeatingsSpan = styled.Text`
    color: #8696BB;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
`

export const GreeatingsText = styled.Text`
    color: #0D1B34;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
`

export const GreeatingsAvatar = styled.Image`
    width: 56px;
    height: 56px;
    flex-shrink: 0;
`

