import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-orange-200 ">
    <div className="py-10 mt-20 text-center space-y-5">
        <h1 className="text-3xl font-semibold">Enjoy exploring Intramuros!</h1>
        <div className="flex justify-center space-x-20">
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Places</h1>
        </div>
    </div>
    <h1 className="text-center text-xs pb-3">Beyond the Walls by IEMDomain04 @2024</h1>
    </div>
  )
}


