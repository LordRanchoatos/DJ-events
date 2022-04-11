import Link from 'next/link'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import EventItem from '@/components/EventItem'


export default function Home({ events }) {
  //console.log(events.data[3].attributes.name)
  //console.log(events)
  return (
    <div >
      <Layout >
        <h1>Upcoming Events </h1>
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

//http://localhost:1337/api/events

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?populate=*`)
  const events = await res.json()

  //console.log(events.data.length)


    return {
      props: {events: events.data.slice(0, 3)},
      revalidate: 1
    }
  
} 
