import qs from 'qs'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import EventItem from '@/components/EventItem'



export default function SearchPage({ events }) {
    const router = useRouter()
  return (
    <div >
      <Layout title='Search Results'>
        <Link href='/events'>Go Back</Link>
        <h1>Search Results for {router.query.term} </h1>
        {events.length === 0 && <h3>No Events Available</h3>}


        {events.map((evt) => (
          <EventItem key={evt.id} evt={evt} />
        ))}

        {events.length > 0 && (
          <Link href='/events'>
            <a className='btn-secondary'>View All Events</a>
          </Link>
        )}
      </Layout> 
    </div>
  )
}

export async function getServerSideProps({ query: 
    {term}}) {
      console.log(`search term: ${term}` )
        const query = qs.stringify({
          filters: {
            name: {
              $contains: term,
            },
          },
        }, {
          encodeValuesOnly: true,
        })
        console.log(query)
    const res = await fetch(`${API_URL}/events?${query}&populate=*`)
    const events = await res.json()


    return {
      props: {events: events.data},
    }
  
} 
