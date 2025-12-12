import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartUpCard from "@/components/StartUpCard";

export default async function Home({ searchParams} : {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: {
      _id: 1,
      name: 'King'
    },
    _id: 1,
    description: 'This is a description',
    image: '/peter-herrmann-h8jHGGSbQsE-unsplash.jpg',
    category: "Robots",
    title: "We outside",
  }]

  return (
    <>
    <section className="pink_container">
      <h1 className="heading">Pitch Your Startup, <br /> Connect With Entrepreneurs</h1>

      <p className="sub-heading !max-w-3xl">
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
      </p>

      <SearchForm query={query} />
    </section>
    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Search result for ${query}` : 'All Startups'}
      </p>

      <ul className="mt-7 card_grid">
        {posts?.length > 0 ? (
          posts.map((post: StartUpCardType, index: number) => (
            <StartUpCard key={post._id} post={post} />
          ))
          ) : (
            <p className="no-results">No startups found</p>
          )
        }
      </ul>
    </section>
    </>
  );
}
