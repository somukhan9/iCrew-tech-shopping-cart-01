const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
})

export const currencyFormatter = (number) => {
  return CURRENCY_FORMATTER.format(number)
}
