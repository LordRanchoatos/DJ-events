import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import EventItem from '@/components/EventItem'



export default function EventsPage({ events }) {
  return (
    <div >
      <Layout >
        <h1>Events </h1>
        {events.length === 0 && <h3>No Events Available</h3>}


        {events.map((evt) => (
          <EventItem key={evt.id} evt={evt} />
        ))}

        {events.lengthh > 0 && (
          <Link href='/events'>
            <a className='btn-secondary'>View All Events</a>
          </Link>
        )}
      </Layout> 
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?populate=*&sort=date:ASC`)
  const events = await res.json()


    return {
      props: {events: events.data},
      revalidate: 1
    }
  
} 
