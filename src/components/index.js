import {Component} from 'react'
import {
  AppContainer,
  MainHeading,
  GreetContainer,
  ButtonContainer,
  ButtonStyle1,
  ButtonStyle2,
  ButtonStyle3,
  ImageContainer,
  List,
  ListItem,
} from './styledComponents'

export default class GreetingMulti extends Component {
  state = {
    greetList: '',
    active1: true,
    active2: false,
    active3: false,
    activeImage: '',
  }

  componentDidMount() {
    const {list} = this.props
    this.setState({
      greetList: list,
      activeImage: list[0].imageUrl,
    })
  }

  onClickBtn1 = () => {
    const {greetList} = this.state
    this.setState({
      active1: true,
      active2: false,
      active3: false,
      activeImage: greetList[0].imageUrl,
    })
  }

  onClickBtn2 = () => {
    const {greetList} = this.state
    this.setState({
      active1: false,
      active2: true,
      active3: false,
      activeImage: greetList[1].imageUrl,
    })
  }

  onClickBtn3 = () => {
    const {greetList} = this.state
    this.setState({
      active1: false,
      active2: false,
      active3: true,
      activeImage: greetList[2].imageUrl,
    })
  }

  render() {
    const {greetList, active1, active2, active3, activeImage} = this.state
    const {list} = this.props
    return (
      <AppContainer>
        <MainHeading>Multilingual Greetings</MainHeading>
        <GreetContainer>
          <ButtonContainer>
            <ButtonStyle1
              type="button"
              active1={active1}
              onClick={this.onClickBtn1}
            >
              {/* {greetList[0].buttonText} */}
              English
            </ButtonStyle1>
            <ButtonStyle2
              type="button"
              active2={active2}
              onClick={this.onClickBtn2}
            >
              {/* {greetList[1].buttonText} */}
              Tamil
            </ButtonStyle2>
            <ButtonStyle3
              type="button"
              active3={active3}
              onClick={this.onClickBtn3}
            >
              {/* {greetList[2].buttonText} */}
              Telugu
            </ButtonStyle3>
          </ButtonContainer>
          <List>
            {list.map(e => (
              <ListItem key={e.id} />
            ))}
          </List>
          <ImageContainer src={activeImage} alt="greeting" />
        </GreetContainer>
      </AppContainer>
    )
  }
}
