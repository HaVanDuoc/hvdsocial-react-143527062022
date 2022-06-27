import React from 'react'
import { Feed, Rightbar, Sidebar } from '../../components/Layouts/components'
import './Home.scss'

const Home = () => {
    return (
        <div className='homePage'>
            <Sidebar />
            <Feed />
            <Rightbar />
        </div>
    )
}

export default Home