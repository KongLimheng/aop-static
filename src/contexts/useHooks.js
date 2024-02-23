import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { countries } from '../utils/dataSelect'
import { store } from './store'

export const useCountries = () => {
  const [tranCountries, setTranCountries] = useState([])
  useEffect(() => {
    let transformCountry = countries.map(({ code, name }) => ({
      value: code,
      label: `${code} ${name}`,
    }))

    setTranCountries(transformCountry)
  }, [countries])

  return tranCountries
}

export const useAuthentication = () => {
  const [cookie] = useCookies(['user'])
  return !!cookie.user
}

export const useGetDataAccounts = () => {
  const [accountList, setAccountList] = useState([])
  const { accountSetup } = store((state) => state.formData)

  useEffect(() => {
    const dataTransform = accountSetup.map(
      ({ accountNumber, accountType, currency }) => ({
        label: `${accountType.label} ${accountNumber} ${currency.label}`,
        value: accountNumber,
        currency: currency.value,
      })
    )

    setAccountList(dataTransform)
  }, [accountSetup])

  return accountList
}
