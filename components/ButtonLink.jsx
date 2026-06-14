import Link from "next/link"

export const ButtonLink = ({ text = "Read More", url = "#" }) => {
  return (
    <Link href={url} className="buttonLink">
      {text}
    </Link>
  )
}
