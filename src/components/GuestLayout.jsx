import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const GuestLayout = () => {
  return (
    <Container fluid>
      <Outlet />
    </Container>
  )
}

export default GuestLayout
