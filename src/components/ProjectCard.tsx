import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  link: string
}

const ProjectCard = ({ title, description, imageSrc, link }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden">
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={link}>Voir le projet</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard

