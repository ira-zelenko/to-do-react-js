export async function fetchData(request) {
  const response = await fetch(request)

  return new Promise((resolve) => {
    resolve(response)
  }).then((response) => {
    return response.json()
  }).catch(console.error)
}
