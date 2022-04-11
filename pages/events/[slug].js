import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";


export default function EventPage({evt}) {
  const deleteEvent = (e) => {
    console.log("delete")
  }
  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.control}>
          <Link href={`/events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href='#' className={styles.delete}
          onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>
        <span>
          {new Date(evt.attributes.date).toLocaleDateString('en-US')} at { evt.attributes.time }
        </span>
        <h1>{evt.attributes.name}</h1>
        {
          evt.attributes.image && (
            <div className={styles.image}>
              <Image src={evt.attributes.image.data.attributes.formats.medium.url} width={960}
              height={600} />
            </div>
          )
        }

        <h3>Performers: </h3>
        <p>{evt.attributes.performers}</p>
        <h3>Description:</h3>
        <p>{evt.attributes.description}</p>
        <h3>Venue: {evt.attributes.venue}</h3>
        <p>{evt.attributes.address}</p>

        <Link href='/events'>
          <a className={styles.back}>
            {'<'} Go Back
          </a>
        </Link>

      </div>
    </Layout>
  )
    
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/events?populate=*&filters[slug][$eq]=${slug}`)
  const events = await res.json()

  return {
    props: {
      evt: JSON.parse(JSON.stringify(events.data[0])),
    },
  }
}




// export async function getServerSideProps({ query: { slug }}) {
//   const res = await fetch(`${API_URL}/events?populate=*&sort=date:ASC`)
//   const events = await res.json()
//   let evtt;

//   for (let i=0; i<events.data.length; i++){
//     if(events.data[i].attributes.slug = slug) {
//       return evtt = events[1]
//     }
//     console.log(evtt)
//   }

//   return {
//     props: {
//       events: evtt.data
//     },
//   }
  
// } 


// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/events`)
//   const events = await res.json()

//   const paths = events.data.map((evt) => ({
//     params: {slug: evt.attributes.slug},
//   }))

//   return {
//     paths, 
//     fallback: true,
//   }
// }

// export async function getStaticProps({ params : {slug}}) {
//   const res = await fetch(`${API_URL}/events?slug=${slug}`)
//   const events = await res.json()
//   console.log(events)

//   return {
//     props: {
//       evt: events[0],
//     }, 
//     revalidate: 1
//   }
// }




// export async function getServerSideProps({ query : {slug}}) {
//   const res = await fetch(`${API_URL}/events?slug=${slug}`)
//   const events = JSON.stringify(res.json())
//   console.log(slug)
//   console.log(events)


//   return {
//     props: {
//       evt: events[0],
//     }, 
//   }
// }