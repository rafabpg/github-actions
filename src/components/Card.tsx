
const Card = () => {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
    <img src="project-thumbnail.jpg" alt="Projeto" className="rounded-lg w-full h-40 object-cover"/>
    <h2 className="text-xl font-semibold text-gray-200 mt-4">Projeto 1</h2>
    <p className="text-gray-400 text-sm mt-2">Descrição curta do projeto.</p>
  </div>
  )
}

export default Card