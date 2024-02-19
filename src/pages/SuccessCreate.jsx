import React from 'react'
import { store } from '../contexts/store'

const SuccessCreate = () => {
  const formData = store((state) => state.formData)
  console.log(formData)
  return <div>SuccessCreate</div>
}

export default SuccessCreate
