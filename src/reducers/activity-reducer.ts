import { Activity } from '../types';

export type ActivityActions = 
    { type: 'SAVE_ACTIVITY', payload: {newActivity : Activity} } 



type ActivityState = {
    activities: Activity[]
}

export const initalSatate : ActivityState = {
      activities: [],
}

export const activityReducer =  (
        state: ActivityState = initalSatate,
        action: ActivityActions
    ) => {

        if (action.type === 'SAVE_ACTIVITY') {
            return {
                ...state,
                activities: [...state.activities, action.payload.newActivity],
            }
        }

        return state
}