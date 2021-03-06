<<<<<<< HEAD

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useState } from "react";
// import styles from "@/styles/Form.module.css";
// import Layout from "../../components/Layout";
// import { API_URL } from "@/config/index";
// import axios from "axios";


// export default function addEventPage() {
//   const [values, setValues] = useState({
//     name: '',
//     performers: '',
//     venue: '',
//     address: '',
//     date: '',
//     time: '',
//     description: '',
//   });

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log(JSON.stringify(values));
//     //Validation
//     const hasEmptyFields = Object.values(values).some(
//       (element) => element === " "
//     );
//     if (hasEmptyFields) {
//       toast.error("Please fill all the fields");
//     }
//     const allValues = JSON.stringify(values);

//     const res = axios.post(`${API_URL}/events`, 
//       allValues, {
//         withCredentials: true,
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       }
//     )
//     // const res = await fetch(`${API_URL}/events`, {
//     //   method: "POST",
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //     body: {data: allValues},
//     // });

//     if (!res.ok) {
//       toast.error("Something Went Wrong");
//     } else {
//       const evt = res.json();
//       console.log(evt);
//       router.push(`/events/${evt.slug}`);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//   };
//   return (
//     <Layout title="Add New Event">
//       <Link href="/events">Go Back</Link>
//       <h1>Add Events</h1>
//       <ToastContainer />

//       <form onSubmit={handleSubmit} className={styles.form}>
//         <div className={styles.grid}>
//           <div>
//             <label htmlFor="name">Event Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={values.name}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="performers">Performers</label>
//             <input
//               type="text"
//               id="performers"
//               name="performers"
//               value={values.performers}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div>
//             <label htmlFor="venue">Venue</label>
//             <input
//               type="text"
//               id="venue"
//               name="venue"
//               value={values.venue}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="address">Address</label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               value={values.address}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="date">Date</label>
//             <input
//               type="date"
//               id="date"
//               name="date"
//               value={values.date}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="time">Time</label>
//             <input
//               type="text"
//               id="time"
//               name="time"
//               value={values.time}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>
//         <div>
//           <label htmlFor="description">Event Description</label>
//           <textarea
//             type="text"
//             id="description"
//             name="description"
//             value={values.description}
//             onChange={handleInputChange}
//           />
//         </div>

//         <input type="submit" value="Add Event" className="btn" />
//       </form>
// =======
// import Layout from "../../components/Layout"

// export default function addEventPage() {
//   return (
//     <Layout>
//         <h1>Add Events</h1>
// >>>>>>> parent of 97e0c92 (created add event page and functional form)
//     </Layout>
//   );
// }
=======
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import styles from '@/styles/Form.module.css'
import Layout from "../../components/Layout"

export default function addEventPage() {
  const [values, setValues] = useState({
    name: '',
    venue: '',
    address: '',
    date: '',
    time: '',
    desscriptiom: ''
  })

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }

  const handleInputChange =(e) => {
    const { name, value } = e.target
    setValues({...values, [name]: value})
  }
  return (
    <Layout title='Add New Event'>
      <Link href='/events'>Go Back</Link>
        <h1>Add Events</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.grid}>
            <div>
              <label htmlFor="name">Event Name</label>
              <input type="text" id="name" 
              name='name'
              value={values.name}
              onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="performers">Performers</label>
              <input type="text" id="performers" 
              name='performers'
              value={values.performers}
              onChange={handleInputChange}
              />
            </div>
            
            <div>
              <label htmlFor="venue">Venue</label>
              <input type="text" id="venue" 
              name='venue'
              value={values.venue}
              onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input type="text" id="address" 
              name='address'
              value={values.address}
              onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input type="date" id="date" 
              name='date'
              value={values.date}
              onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="time">Time</label>
              <input type="text" id="time" 
              name='time'
              value={values.time}
              onChange={handleInputChange}
              />
            </div>

          </div>
            <div>
              <label htmlFor="description">Event Description</label>
              <textarea type="text" id="description" 
              name='description'
              value={values.description}
              onChange={handleInputChange}
              />
            </div>

          <input type='submit' value="Add Event" className='btn'/>
        </form>
    </Layout>
  )
}
>>>>>>> parent of eeca118 (before v2 backend)
