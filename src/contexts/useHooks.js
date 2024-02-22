import { useEffect, useState } from 'react'
import { countries } from '../utils/dataSelect'

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
