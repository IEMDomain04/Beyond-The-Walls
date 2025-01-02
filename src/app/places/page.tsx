export default function Places() {
  return (
    <div>
      <div className="text-center my-20">
        <h2 className="text-xl max-sm:text-base">Your Guide to Must-See Places</h2>
        <h1 className="text-5xl font-bold tracking-wide max-sm:text-3xl">Places Beyond Intramuros</h1>
      </div>

      {/*Fix this Horizontal Line hahahah */}
      <hr className="bg-black h-1 my-20" />

      <div className="flex justify-center space-x-10">
        <button className="py-3 px-10 bg-green-400 border border-black rounded hover:scale-110 hover:bg-green-600" type="button">Cafe</button>
        <button className="py-3 px-10 bg-green-400 border border-black rounded hover:scale-110 hover:bg-green-600" type="button">Museum</button>
        <button className="py-3 px-10 bg-green-400 border border-black rounded hover:scale-110 hover:bg-green-600" type="button">Churches</button>
        <button className="py-3 px-10 bg-green-400 border border-black rounded hover:scale-110 hover:bg-green-600" type="button">Billiards</button>
      </div>
    </div>
  )
}


