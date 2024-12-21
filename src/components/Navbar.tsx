export default function Navbar() {
    return (
        <nav className='top-0 flex justify-around py-4 bg-orange-50'>
            <div className='flex items-center space-x-5 cursor-pointer'>
                <img src="https://cdn-icons-png.flaticon.com/128/698/698684.png" width={50} height={50} alt="" />
                <h1 className='text-xl font-semibold'>Beyond the Walls</h1>
            </div>

            {/* Change the h1 to link for navigation */}
            <div className='flex items-center space-x-20'>
                <h1 className='text-lg font-semibold cursor-pointer py-1 px-3 rounded hover:bg-orange-200 duration-200'>Home</h1>
                <h1 className='text-lg font-semibold cursor-pointer py-1 px-3 rounded hover:bg-orange-200 duration-200'>About</h1>
                <h1 className='text-lg font-semibold cursor-pointer py-1 px-3 rounded hover:bg-orange-200 duration-200'>Places</h1>
            </div>

            <div className='flex items-center space-x-10'>
                <button className='py-2 px-5 rounded-xl text-white bg-blue-800 cursor-pointer duration-200 hover:bg-blue-600' type="button"> Sign in</button>
                <button className='py-2 px-5 rounded-xl border border-solid border-blue-800 cursor-pointer duration-200 hover:bg-blue-300' type="button"> Register</button>
            </div>
        </nav>
    )
}
