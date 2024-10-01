import { categories } from "../data/categories"

export default function Form() {
  return (
    <form
        className="space-y-5 bg-white p-10 rounded-lg shadow-md"
    >
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="text-sm font-semibold text-gray-600">Category</label>
            <select className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                id="category"
                name="category"
            >
                {categories.map(category => (
                    <>
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}                         
                        </option>
                   
                    </>
                ))}
            </select>
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="activity" className="text-sm font-semibold text-gray-600">Activity</label>
            <input
                type="text"
                id="activity"
                name="activity"
                className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                placeholder="...Running, walking, Organge juice, etc."
            />
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className="text-sm font-semibold text-gray-600">Calories</label>
            <input
                type="number"
                id="calories"
                name="calores"
                className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                placeholder="...100, 200, 300, etc."
            />
        </div>
        <input
            type="submit"
            className="bg-gray-800 text-white font-semibold p-2 rounded-lg w-full cursor-pointer"
            value="Add activity or food"
        />
                
    </form>    
  )
}
