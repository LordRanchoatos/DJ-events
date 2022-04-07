import Layout from "@/components/Layout";
import Link from 'next/link';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import { API_URL } from "@/config/index";
import styles from '@/styles/Events.module.css'

export default function EventPage({ evt }) {
    const deleteEvent = (e) => {
        console.log('delete')
    }
    return (
        <Layout>
            <div className={styles.event}>
                <div className={styles.controls}>
                    <Link href={`/events/edit/${evt.id}`}>
                        <a>
                            <FaPencilAlt /> Edit Event
                        </a>
                    </Link>
                    <a href='#' className={styles.delete}
                    onClick={deleteEvent}
                    >
                        <FaTimes /> Delete Event
                    </a>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`${API_URL}/api/events`)
    const events = await res.json()

    const paths = events.map((evt) => ({
        params: {slug: evt.slug },
    })) 
}