import { useMemo, Dispatch } from 'react'
import { categories } from "../data/categories"
import { Activity } from "../types"
import { PencilSquareIcon } from "@heroicons/react/24/outline"
import { TrashIcon } from "@heroicons/react/24/outline"
import { ActivityActions } from "../reducers/activity-reducer"

type ActivityListProps = {
    activities: Activity[]
    dispatch: Dispatch<ActivityActions>
}

export default function ActivityList({activities, dispatch } : ActivityListProps) {

    const categoryName = useMemo(() => 
        (category: Activity['category']) => categories.map( cat => cat.id.toString() === category ? cat.name : '')
    , [activities])

    const isEmptyActivities = useMemo(() => activities.length === 0, [activities])

    return (
        <>
            <h2 className="text-4xl font-bold text-slate-600 text-center">
                Food and Activities
            </h2>

            { isEmptyActivities ? 
            <p className='text-center my-5'>No entries</p> :
            
            activities.map(activity => (
                     <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex
                     justify-between items-center rounded-lg shadow-md"
                     >    
                        <div className="space-y-2 relative">
                            <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase
                                font-bold
                                ${activity.category.toString() === '1' ? 'bg-gray-400' : 'bg-slate-800'}`}>
                                {categoryName(activity.category)}
                            </p>
                            <p className="text-2xl font-semibold text-slate-600">
                                {activity.name}
                            </p>
                            <p className="text-lg text-slate-500">
                                {activity.calories} calories
                            </p>
                        </div>

                        <div className="flex gap-5 items-center">
                            <button 
                                className="text-slate-500 hover:text-slate-700"
                                onClick={()=>dispatch({type : "set-activeId", payload: {id: activity.id}})}>
                                
                                <PencilSquareIcon className="h-5 w-5"/>
                            </button>
                            <button 
                                className="text-slate-300 hover:text-slate-700"
                                onClick={()=>dispatch({type : "delete-activity", payload: {id: activity.id}})}>
                                
                                <TrashIcon className="h-5 w-5"/>
                            </button>
                        </div>
                            
                     </div>
                ))}
        </>
    )
}
      
