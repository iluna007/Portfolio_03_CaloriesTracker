import { useState, ChangeEvent, FormEvent, Dispatch } from "react"
import { categories } from "../data/categories"
import type { Activity } from "../types"
import { ActivityActions } from "../reducers/activity-reducer"

type FormProps = {
    dispatch: Dispatch<ActivityActions>
}

export default function Form({dispatch} : FormProps) {

    const [activity, setActivity] = useState<Activity>({
        category: '1',
        name: '',
        calories: 0
    })

    const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const isNumberFiled = ['category', 'calories'].includes(e.target.id)
        setActivity({
            ...activity,
            [e.target.id]: isNumberFiled ? +e.target.value : e.target.value
        })
    }

    const isValidActivity = () => {
        const { name, calories } = activity
        console.log(name.trim() !== '' && calories > 0)
        return name.trim() !== '' && calories > 0

    }

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('submiting...')

        dispatch({
            type: 'SAVE_ACTIVITY',
            payload: { newActivity: activity }
        })
    }
    
    return (
        <form
            className="space-y-5 bg-white p-10 rounded-lg shadow-md"
            onSubmit={handleSubmit} 
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="text-sm font-semibold text-gray-600">Category</label>
                <select 
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    id="category"
                    value={activity.category}
                    onChange={handleChange}
                >
                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}                         
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="text-sm font-semibold text-gray-600">Activity Name</label>
                <input 
                    type="text"
                    id="name"
                    value={activity.name}
                    onChange={handleChange}
                    className="border border-slate-300 p-2 rounded-lg w-full"
                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="text-sm font-semibold text-gray-600">Calories</label>
                <input 
                    type="number"
                    id="calories"
                    value={activity.calories}
                    onChange={handleChange}
                    className="border border-slate-300 p-2 rounded-lg w-full"
                />
            </div>

        <input
            type="submit"
            className="bg-gray-800 text-white font-semibold p-2 rounded-lg w-full cursor-pointer disabled:opacity-30"   
            value={+activity.category === 1 ? 'Log activity' : 'Log meal'}
            disabled={!isValidActivity()}
        />
                
    </form>    
  )
}
