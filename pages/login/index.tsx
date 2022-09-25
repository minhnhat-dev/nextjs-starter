import * as React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import srcLogo from '../../public/images/logo.png'
import srcBannerLeft from '../../public/images/banner_left.jpeg'
import styles from '../../styles/Login.module.css'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button as ButtonMaterial } from '@mui/material';
import { device } from '../../src/constants'
interface State {
    showPassword: boolean;
    isRemember: boolean;
}

const Button = styled.button`
    min-width: 4rem;
    width: 100%;
    height: 3rem;
    border: 1px solid rgba(145, 158, 171, 0.32);
    height: 3rem;
    border-radius: 8px;
    outline: none;
    background-color: inherit;
    padding: .5rem 1.3125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .5rem;
`

const Title = styled.h1`
    margin-top: 8rem;
    margin-bottom: 4rem;
`
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 1rem;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
`

const ImageWrap = styled.span`
    max-width: 4rem;
    max-height: 4rem;
`

const BoxLeft = styled.div`
    border-radius: .3rem;
    box-shadow: rgb(145 158 171 / 20%) 0px 3px 1px -2px, rgb(145 158 171 / 14%) 0px 2px 2px 0px, rgb(145 158 171 / 12%) 0px 1px 5px 0px;
    flex: 1;
    display: flex;
    padding: 2rem;
    flex-direction: column;
    min-height: 40rem;
`
const BoxRight = styled.div`
    flex: 2;
    flex-direction: column;
    padding: 1.5rem;
`

const Header = styled.div`
    display: flex;
    height: 3rem;
    width: 100%;
    justify-content: flex-end;
`
const TitleHeader = styled.span`
    font-size: 0.875rem;
`
const Link = styled.a`
    text-decoration: underline rgba(32, 101, 209, 0.4);
    color: rgb(32, 101, 209);
    font-weight: 600;
    line-height: 1.57143;
    font-size: 0.875rem;
    cursor: pointer;
`
const Body = styled.div`
    margin-top: 1rem;
`

const BoxLogin = styled.div`
    max-width: 30rem;
    margin: auto;
`;
const SubTitle = styled.p`
    line-height: 1.5;
    color: rgb(99, 115, 129);
    margin-bottom: 2.5rem;
`;

const ButtonGroup = styled.div`
    display: flex;
`

const Dash = styled.div`
    display: flex;
    margin: .5rem 0;
    
    &:before {
        width: 100%;
        border-top: thin solid rgba(145, 158, 171, 0.24);
        content: "";
        transform: translateY(50%);
    }

    &:after {
        width: 100%;
        border-top: thin solid rgba(145, 158, 171, 0.24);
        content: "";
        transform: translateY(50%);
    }
`
const Text = styled.span`
    font-size: 0.875rem;
    color: rgb(99, 115, 129);
`
const Form = styled.form``
const FormGroup =  styled.div``
const Input = styled.input`
    outline: none;
    margin: 0px;
    height: 1.4375em;
    background-color: inherit;
    border-radius: .5rem;
    color: rgb(33, 43, 54);
`

const EmailInput = styled(Input)``
const PasswordInput =  styled(Input)``
const InputWrapper = styled.div``;
const RememberBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
`;

const ButtonLogin = styled(ButtonMaterial)({
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '1rem'
})

const Login: NextPage = () => {
  const [values, setValues] = React.useState<State>({
    showPassword: false,
    isRemember: false,
  });

  return (
    <Container>
      <BoxLeft>
        <ImageWrap>
            <Image
                src={srcLogo}
                alt='Logo'
                className={"logo"}
            />
        </ImageWrap>
        
        <Title>Hi, Welcome Back</Title>
        <Image
          src={srcBannerLeft}
          alt='Logo'
          width={500}
          height={300}
        />
      </BoxLeft>
      <BoxRight>
        <Header>
            <TitleHeader>Don’t have an account? <Link>Get started</Link></TitleHeader>
        </Header>
        <Body>
            <BoxLogin>
                <Title style={{margin: 0, fontSize: '1.5rem'}}>Sign in to Minimal</Title>
                <SubTitle>Enter your details below.</SubTitle>
                <ButtonGroup>
                    <Button><GoogleIcon className={styles['btn-google']}/></Button>
                    <Button className='ml-1 mr-1'><FacebookIcon className={styles['btn-facebook']}/></Button>
                    <Button><TwitterIcon className={`${styles['btn-twitter']}`}/></Button>
                </ButtonGroup>
                <Dash>
                    <Text className='pr-05 pl-05'><p style={{}}>OR</p></Text>
                </Dash>
                <Form>
                    <FormControl fullWidth sx={{mb: 3}} variant='outlined'>
                        <InputLabel htmlFor='outlined-email'>Email address</InputLabel>
                        <OutlinedInput
                            id='outlined-email'
                            label="Email address"
                        />
                    </FormControl>
                    <FormControl fullWidth variant='outlined'>
                        <InputLabel htmlFor='outlined-password'>Password</InputLabel>
                        <OutlinedInput
                            id="outlined-password"
                            label="Password"
                            type={values.showPassword ? 'text' : 'password'}
                            endAdornment= {
                                <InputAdornment position='end'>
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        edge="end"
                                        onClick={() => (setValues({...values, showPassword: !values.showPassword}))}
                                    >
                                    {!values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                       />
                    </FormControl>
                </Form>
                <RememberBox>
                    <FormControlLabel
                        label="Remember me"
                        control={
                        <Checkbox
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => (setValues({...values, isRemember: event.target.checked}))}
                        defaultChecked
                        inputProps={{ 'aria-label': 'controlled' }}
                        />}
                    />
                    <Link>Forgot password?</Link>
                </RememberBox>
                <ButtonLogin fullWidth variant="contained">Login</ButtonLogin>
            </BoxLogin>
        </Body>
      </BoxRight>
    </Container>
  )
}

export default Login
