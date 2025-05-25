import ArtistStatement from "./components/ArtistStatement/ArtistStatement"
import Hero from "./components/Hero/Hero"

export default function Home() {
  return(
    <div className="min-h-[50vh]">
      <Hero />
      <ArtistStatement />
    </div>
  )
}
