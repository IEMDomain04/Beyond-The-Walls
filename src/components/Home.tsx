export default function Homepage() {
    return (
        <main className="mt-20">
            <div className="text-center justify-items-center space-y-8 mb-10">
                <h2 className="text-xl">Welcome to</h2>
                <h1 className="text-5xl font-bold tracking-wide">Beyond the Walls</h1>
                <p className="w-8/12">Not sure where to go? Don’t worry! This app is your guide to exploring Intramuros. You’re searching for historic landmarks, cozy cafes, or hidden gems, we’ll help you easily navigate the Walled City and discover the places you’d love to see!</p>
            </div>

            {/* Add pointer and hover */}
            <div className="flex justify-center space-x-20">
                <button className="py-3 px-8 text-white rounded bg-orange-600" type="button">See places</button>
                <button className="py-3 px-8 text-white rounded bg-green-600" type="button">Learn more</button>
            </div>

            <img className='bottom-0 -mt-60' src="/assets/fort-santiago-bg.svg" alt="Fort Santiago" />
        </main>
    )
}

