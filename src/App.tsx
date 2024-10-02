import { useReducer, useEffect, useMemo } from "react"
import Form from "./components/Form"
import { activityReducer, initalSatate } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initalSatate)

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  const canRestartApp = () => useMemo(() => state.activities.length > 0, [state.activities])

  return (
    <>
      <header className="bg-gray-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Calories counter
          </h1>
          <button 
            className="text-white bg-gray-400 px-5 py-2 rounded-lg disabled:opacity-10"
            onClick={() => dispatch({type: 'restart-app'})}
            disabled={!canRestartApp()}   
          > 
            Restart 
          </button>
        </div>
      </header>
      <section className="bg-gray-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form 
            dispatch={dispatch}
            state={state}
          />
        </div>
      </section>
      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList 
          activities={state?.activities ?? []}
          dispatch={dispatch}
        />

      </section>    
    </>
  )
}

export default App
