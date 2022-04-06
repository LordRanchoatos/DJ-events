import Layout from '@/components/Layout'
import { API_URL } from '../config/index'


export default function Home({ events }) {
   console.log(events)
  return (
    <div >
      <Layout >
        <h1>Upcoming Events </h1>
      </Layout> 
 
      
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

    console.log(events)

    return {
      props: {events},
    }
  
} 