import Link from "next/link"
import styles from '@/styles/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
        <p className="">Copyright &copy; DJ Events 2021</p>
        <p>
            <Link href='/about'>About This Project</Link>
        </p>
    </div>
  )
}