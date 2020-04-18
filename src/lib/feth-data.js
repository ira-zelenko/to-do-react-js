export async function fetchData(request) {
  const response = await fetch(request)
  return await buildResponseData(response)
}

async function buildResponseData(response) {
  return {
    url: response.url,
    status: response.status,
    ok: response.ok,
    json: await getResponseJson(response),
  }
}

async function getResponseJson(response) {
  return new Promise((resolve) => {
    response.json()
      .then(json => {
        resolve(json)
      })
      .catch(() => {
        resolve()
      })
  })
}
