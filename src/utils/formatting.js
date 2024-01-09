export const formatIngredients = (ingredients) => {
  if (!ingredients) {
    return null
  }
  let ingredientsArr = ingredients.split(',')
  let ingredientList = ingredientsArr.map((ingredient, index) => {
    return <li key={index}>{ingredient}</li>
  })
  return ingredientList
}

export const formatMethod = (method) => {
  if (!method) {
    return null
  }
  let methodArr = method.split('-').splice(1)
  let methodList = methodArr.map((method, index) => {
    return <li key={index}>{method}</li>
  })
  return methodList
}
export const formatDate = (secs) => {
  if (!secs) {
    return null
  }

  var t = new Date(Date.UTC(1970, 0, 1)) // Epoch
  t.setSeconds(secs)

  const day = t.getUTCDate()
  const month = t.getUTCMonth() + 1
  const year = t.getFullYear()
  const dateString = `${month}/${day}/${year}`

  return dateString
}
