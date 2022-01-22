import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #1e293b;
`
export const GreetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
  width: 60vw;
`

export const ButtonStyle1 = styled.button`
  background-color: transparent;
  border-radius: 10px;
  border: solid #db1c48;
  height: 40px;
  width: 80px;
  background-color: ${props => (props.active1 ? '#db1c48' : '#f9f9f9')};
  color: ${props => (props.active1 ? '#f9f9f9' : '#db1c48')};
  cursor: pointer;
`

export const ButtonStyle2 = styled.button`
  background-color: transparent;
  border-radius: 10px;
  border: solid #db1c48;
  height: 40px;
  width: 80px;
  background-color: ${props => (props.active2 ? '#db1c48' : '#f9f9f9')};
  color: ${props => (props.active2 ? '#f9f9f9' : '#db1c48')};
  cursor: pointer;
`

export const ButtonStyle3 = styled.button`
  background-color: transparent;
  border-radius: 10px;
  border: solid #db1c48;
  height: 40px;
  width: 80px;
  background-color: ${props => (props.active3 ? '#db1c48' : '#f9f9f9')};
  color: ${props => (props.active3 ? '#f9f9f9' : '#db1c48')};
  cursor: pointer;
`
export const ImageContainer = styled.img`
  width: 100px;
  height: 100px;
  margin: 15px;
`

export const List = styled.ul`
  list-style: none;
`
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
`
