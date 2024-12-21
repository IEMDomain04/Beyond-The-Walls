export default function Homepage() {
    return (
        <>
            <main className="mt-20">
                <div className="text-center justify-items-center space-y-8 mb-10 max-sm:space-y-5">
                    <h2 className="text-xl max-sm:text-base">Welcome to</h2>
                    <h1 className="text-5xl font-bold tracking-wide max-sm:text-3xl">Beyond the Walls</h1>
                    <p className="w-6/12 max-sm:text-xs max-sm:w-11/12">Not sure where to go? Don’t worry! This app is your guide to exploring Intramuros. You’re searching for historic landmarks, cozy cafes, or hidden gems, we’ll help you easily navigate the Walled City and discover the places you’d love to see!</p>
                </div>

                {/* Buttons */}
                <div className="flex justify-center space-x-20 max-sm:flex-col max-sm:px-16 max-sm:space-y-5 max-sm:space-x-0">
                    <button className="py-3 px-9 text-white rounded cursor-pointer duration-300 bg-orange-600 hover:bg-orange-800 max-sm:" type="button">See places</button>
                    <button className="py-3 px-9 text-white rounded cursor-pointer duration-300 bg-green-600 hover:bg-green-800 max-sm:" type="button">Learn more</button>
                </div>

                <img className='bottom-0 mt-32 w-full' src="/assets/fort-santiago-bg.svg" alt="Fort Santiago" />
            </main>
        </>
    )
}

