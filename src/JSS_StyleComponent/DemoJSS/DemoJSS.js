import React, { Component } from 'react'
import { Button, SmallButton} from '../Components/Button'
import { StyledLink } from '../Components/Link'
import { TextField } from '../Components/TextField'

export default class DemoJSS extends Component {
  render() {
    return (
      <div>
        <Button className='button_style' bgPrimary>Click me</Button>
        <SmallButton>Hi my furture</SmallButton>
        <StyledLink>ahihii</StyledLink>
        <TextField inputColor='purple'></TextField>
      </div>
    )
  }
}
