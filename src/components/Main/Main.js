import { Container } from '@mui/material'
import React from 'react'
import Skills from '../Skills/Skills'
import Banner from '../Banner/Banner'
import NavBar from '../NavBar/NavBar'
import BasicTabs from '../Tabs/TabsProjects'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

export const Main = () => {
  return (
      <Container sx={{
          width: '100vw',
          height: '100vh',
      }}>
          <NavBar />
          <Banner />
          <Skills />
          <BasicTabs />
          <Contact />
          <Footer />
      </Container>
  )
}
