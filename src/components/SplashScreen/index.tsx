import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PageCenter } from '../../styles/Global'
import { useNavigate } from 'react-router-dom'
import { loginRoute } from '../../route'


interface LogoAnimationProps {
  logoSize: string
}

const LogoAnimation = styled.div<LogoAnimationProps>`
  svg {
    width: ${({ logoSize }) => logoSize};
    transition: width 1s;
  }
`

const SplashScreen = () => {
  const [logoSize, setLogoSize] = useState('80px')
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setLogoSize('240px')
      } else {
        setLogoSize('350px')
      }
    }

    // Set initial logo size
    handleResize()

    // Update logo size on window resize
    window.addEventListener('resize', handleResize)

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    setTimeout(()=>{
      navigate(loginRoute);
    },1000)
  })

  //TODO: App Logo
  
  return (
    <PageCenter justifyCenter>
      <LogoAnimation logoSize={logoSize}>
        {/* <AppLogo /> */}
      </LogoAnimation>
    </PageCenter>
  )
}

export default SplashScreen
