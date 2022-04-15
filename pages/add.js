import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Layout from "@/components/Layout"
import { API_URL } from "../config"
import styles from '@/styles/Form.module.css'


export default function add() {
  return (
    <Layout title='Add New Event'>
        <h1>Add Event</h1>
    </Layout>
  )
}
