export const getRandomAccount = (digit) => {
  return (
    parseInt(
      Math.random()
        .toFixed(digit - 3)
        .split('.')[1]
    ) + Math.pow(10, digit - 1)
  )
}

/**
 *
 * @param {Date} dob
 * @returns
 */
export const calculateAge = (dob) => {
  // const str_date = dateStr.split('/')
  const today = new Date()
  // var dob = new Date(`${str_date[2]}-${str_date[1]}-${str_date[0]}`)

  let calAge =
    today.getFullYear() -
    dob.getFullYear() -
    (today.getMonth() < dob.getMonth() ||
      (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate()))

  return calAge
}

export const getSymbol = (currency) => {
  let sym
  if (currency === 'USD') {
    sym = '$'
  } else if (currency === 'KHR') {
    sym = '៛'
  } else {
    sym = undefined
  }
  return sym
}
