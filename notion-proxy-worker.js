// Cloudflare Workers - Notion API Proxy
// 部署到 Cloudflare Workers 後，把 URL 填進工具設定

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Notion-Version',
      }
    })
  }

  const url = new URL(request.url)
  const notionUrl = 'https://api.notion.com' + url.pathname + url.search

  const headers = new Headers()
  for (const [key, value] of request.headers.entries()) {
    if (['authorization', 'notion-version', 'content-type'].includes(key.toLowerCase())) {
      headers.set(key, value)
    }
  }

  const body = request.method !== 'GET' ? await request.text() : undefined

  const response = await fetch(notionUrl, {
    method: request.method,
    headers,
    body
  })

  const responseBody = await response.text()

  return new Response(responseBody, {
    status: response.status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })
}
