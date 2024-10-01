import { useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initalSatate } from "./reducers/activity-reducer"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initalSatate)

  return (
    <>
      <header className="bg-gray-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Calories counter
          </h1>
        </div>
      </header>
      <section className="bg-gray-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form 
            dispatch={dispatch}
          />
        </div>
      </section>    
    </>
  )
}

export default App
