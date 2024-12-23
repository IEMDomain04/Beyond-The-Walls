import Footer from '@/components/Footer';

export default function About() {
    return (
        <section className='bg-orange-50'>
            <section className="flex px-32 py-20 items-center mb-10 max-sm:flex-col max-sm:px-7 max-sm:space-y-10 max-sm:mb-5">
                <div className="space-y-5">
                    <h1 className="text-5xl font-bold tracking-wide max-sm:text-3xl">"Where is this place po?"</h1>
                    <p className="w-11/12 max-sm:text-xs max-sm:w-11/12">It’s common for students, roamers, and tourists exploring Intramuros to feel a bit overwhelmed or tired when they can’t easily find the places they’re looking for. That’s why this app is here—to make your journey stress-free and help you effortlessly discover the spots you want to visit inside Intramuros.</p>
                    <button className="py-3 px-9 text-white rounded cursor-pointer duration-300 bg-orange-600 hover:bg-orange-800 max-sm:w-full" type="button">See places</button>
                </div>
                <img src="https://pinasculture.com/wp-content/uploads/2024/05/shutterstock_1906890529-2.webp" width={500} height={400} alt="" />
            </section>

            <section className="space-y-14 px-32 max-sm:flex-col max-sm:px-7 max-sm:space-y-10">
                <div className="space-y-10">
                    <h1 className="text-5xl font-bold tracking-wide max-sm:text-3xl">Intramuros</h1>
                    <p>Intramuros, often called the "Walled City," is a historic district in Manila, Philippines, rich in cultural heritage and stories of the past. Built during the Spanish colonial period, its massive stone walls, cobblestone streets, and well-preserved structures offer visitors a glimpse into the country's history.
                        <br></br>
                        <br></br>
                        Today, Intramuros is a popular destination for students, tourists, and locals, providing a unique mix of historical landmarks, museums, and vibrant attractions. Whether you're exploring its iconic Fort Santiago or strolling through its picturesque streets, Intramuros offers a timeless journey into the heart of Filipino history.
                        <br></br>
                        <br></br>
                        You’re searching for historic landmarks, cozy cafes, or hidden gems, we’ll help you easily navigate the Walled City and discover the places you’d love to see!</p>
                </div>

                <div className="flex justify-between max-sm:flex-col max-sm:space-y-10">
                    <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/542000/542986-fort-santiago.jpg" alt="Intra img" width={500} height={500} />
                    <img src="https://sa.kapamilya.com/absnews/abscbnnews/media/2023/life/03/28/20210918-covid-intramuros-tourists-gc-7534.jpg" alt="Intra Img" width={500} height={500} />
                </div>
            </section>
            <Footer />
        </section>
    )
}


