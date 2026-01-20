import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <h1>Hello "/about"!</h1>
    [<Link to="/">Home</Link>]
  </div>
}
