
import ArtistStatement from "./_components/ArtistStatement/ArtistStatement"
import Hero from "./_components/Hero/Hero"


export default async function Home() {
  
  return(
    <div className="min-h-[50vh]">
      <Hero />
      <ArtistStatement />
      
    </div>
  )
}
