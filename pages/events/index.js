import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import EventItem from '@/components/EventItem'


export default function EventsPage({ events }) {
  console.log(events)
  const eve = events.events
  return (
    <div >
      <Layout >
        <h1>Events </h1>
        {events.events.length === 0 && <h3>No Events Available</h3>}


        {events.events.map((evt) => (
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
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  console.log(events)

    return {
      props: {events},
      revalidate: 1
    }
  
} 
