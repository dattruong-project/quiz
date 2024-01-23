import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import ToggleTheme from './components/ui/ToggleTheme'
import { GlobalStyles } from './styles/Global'
import { themes } from './styles/Theme'
import { Layout } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Main from './route'
import QuizProvider from './context/topic/TopicProvider'

function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || 'light'
  })

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    setCurrentTheme(checked ? 'dark' : 'light')
    localStorage.setItem('theme', checked ? 'dark' : 'light')
  }

  const theme = currentTheme === 'light' ? themes.light : themes.dark

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout style={{ padding: theme.paddings.container, background: theme.colors.background }}>
          <Header style={{ background: theme.colors.background }}>
            <GlobalStyles />
            <ToggleTheme
              onChange={toggleTheme}
              currentTheme={currentTheme}
              checked={currentTheme === 'dark'}
              id="toggleTheme"
              value="theme"
            />
          </Header >
          <Content>
            <QuizProvider>
              <Main />
            </QuizProvider>
          </Content >
        </Layout>
      </ThemeProvider>
    </>

  )
}

export default App
