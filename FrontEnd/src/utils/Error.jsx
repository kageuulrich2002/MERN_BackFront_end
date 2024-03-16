export default function Error404() {

    return <>
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-3 rounded relative w-auto mt-6 " role="alert">
        <strong className="font-bold">Erreur 404 !</strong>
        <span className="block sm:inline">Nous ne reconnaisons pas ce chemin. Veuillez réessayer.</span>
        </div>
    </>
    
 }