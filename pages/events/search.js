import qs from 'qs'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import EventItem from '@/components/EventItem'



export default function SearchPage({ events }) {
    const router = useRouter
  return (
    <div >
      <Layout title='Search Results'>
        {/* <h1>Search Results for {router.query.term} </h1> */}
        {events.length === 0 && <h3>No Events Available</h3>}


        {events.map((evt) => (
          <EventItem key={evt.id} evt={evt} />
        ))}

        {events.lengthh > 0 && (
          <Link href='/events'>
            <a className='btn-secondary'>View All Events</a>
          </Link>
        )}
        <h1>filtered</h1>
      </Layout> 
    </div>
  )
}

export async function getServerSideProps({ query: 
    {term}}) {
        const query = qs.stringify({
            filter: {
                name: {
                  $contains:term
                },
                address: {
                  $contains:term
                },
                performer: {
                  $contains:term
                },
                venue: {
                  $contains:term
                },
            }
        })
  const res = await fetch(`${API_URL}/events?${query}`)
  const events = await res.json()

  console.log(events)

    return {
      props: {events: events.data},
    }
  
} 
