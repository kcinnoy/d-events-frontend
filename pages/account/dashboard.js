import {parseCookies} from '@/helpers/index'
import Layout from '@/components/Layout';
import DashBoardEvent from '@/components/DashBoardEvent'
import {API_URL} from '@/config/index'

export default function DashboardPage({events}) {
    const deleteEvent = (id) => {
        console.log(id)
    }

    return (
        <Layout title='User Dashboard'>
           <div>
                <h1>Dashboard</h1>
                <h3>My Events</h3>

                {events.map((evt) => (
                    <DashBoardEvent key={evt.id} evt={evt} handleDelete={deleteEvent}/>
                ))}
           </div>
        </Layout>
    )
}

export async function getServerSideProps({req}) {
    const {token} = parseCookies(req)

    const res = await fetch(`${API_URL}/events/me`, {
        methd: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const events = await res.json()

    return {
        props: {
            events
        },
    }
}