import { categories } from "../data/categories"
import { Activity } from "../types"
import { useMemo } from 'react'

type ActivityListProps = {
    activities: Activity[]
}

export default function ActivityList({activities} : ActivityListProps) {

    const categoryName = useMemo(() => 
        (category: Activity['category']) => categories.map( cat => cat.id.toString() === category ? cat.name : '')
    , [activities])

    return (
        <>
            <h2 className="text-4xl font-bold text-slate-600 text-center">
                Food and Activities
            </h2>
            {
               activities.map(activity => (
                     <div
                          key={activity.id}
                          className="bg-white p-5 rounded-lg shadow-md mt-5"
                     >    
                         <p>
                            {categoryName(activity.category)}
                          </p>
                          <h3 className="text-2xl font-semibold text-slate-600">
                            {activity.name}
                          </h3>
                          <p className="text-lg text-slate-500">
                            {activity.calories} calories
                          </p>
                     </div>
                ))
            }
        </>
    )
}
