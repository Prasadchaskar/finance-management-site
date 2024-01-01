import React from 'react'
import Laptop from '../assets/laptop.jpg'

function Analytics() {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="laptop" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p>
                        Welcome to the Analytics Dashboard! Gain valuable insights into your financial data
                        with our powerful analytics tools. Track expenses, monitor income trends, and visualize
                        your financial performance with interactive charts and graphs. Empower yourself with
                        data-driven decisions to achieve your financial goals. If you have any questions or need
                        assistance, our support team is here to help.
                        Start exploring and making informed financial decisions today!
                    </p>
                    <button className='bg-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Analytics