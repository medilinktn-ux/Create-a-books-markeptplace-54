import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import Carousel from '../components/ui/Carousel.jsx'
import Badge from '../components/ui/Badge.jsx'

export default function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to BookStore</h1>
      <Carousel />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <Card>
          <Badge>New</Badge>
          <p>Featured Book 1</p>
        </Card>
        <Card>
          <Badge>Hot</Badge>
          <p>Featured Book 2</p>
        </Card>
        <Card>
          <Badge>Sale</Badge>
          <p>Featured Book 3</p>
        </Card>
      </div>
    </div>
  )
}