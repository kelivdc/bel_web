import { getProject } from '@/server/project'
import { createFileRoute, useLoaderData } from '@tanstack/react-router'

export const Route = createFileRoute('/coba/$slug')({
  component: RouteComponent,
  loader: async ({params}) => {
   const dataslug = params.slug
   const result = await getProject({data: {slug: dataslug}})   
   return result
  }
})

function RouteComponent() {
  const loader = useLoaderData({from: '/coba/$slug'})
  console.log('loader', loader)
  return <div>Hello "/coba/$slug"!</div>
}
