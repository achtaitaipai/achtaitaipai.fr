import type { APIRoute } from 'astro'

export const GET: APIRoute = () => {
	return new Response(
		`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="7" fill="#191918" />
        </svg>
        `,
		{
			headers: {
				'Content-Type': 'image/svg+xml'
			}
		}
	)
}
