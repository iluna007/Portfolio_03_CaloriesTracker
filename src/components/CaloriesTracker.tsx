import { useMemo } from "react";
import type { Activity } from "../types";
import CaloriesDisplay from "./CaloriesDisplay";

type CalorieTrackerProps = {
    activities: Activity[];
};

export default function CalorieTracker({ activities }: CalorieTrackerProps) {
    // Add console log to check the activities data
    console.log("Activities:", activities);

    const caloriesConsumed = useMemo(() => {
        const totalCalories = activities.reduce((total, activity) => {
            console.log("Activity:", activity); // Log each activity
            return Number(activity.category) === 1 ? total + Number(activity.calories) : total;
        }, 0);
        console.log("Total Calories Consumed:", totalCalories); // Log the total calories
        return totalCalories;
    }, [activities]);

    const caloriesBurned = useMemo(() => {
        const totalCalories = activities.reduce((total, activity) => {
            console.log("Activity:", activity); // Log each activity
            return Number(activity.category) === 2 ? total + Number(activity.calories) : total;
        }, 0);
        console.log("Total Calories Consumed:", totalCalories); // Log the total calories
        return totalCalories;
    }, [activities]);

    const netCalories = useMemo(() => {
        return caloriesConsumed - caloriesBurned;
    }, [caloriesConsumed, caloriesBurned]);

    return (
        <>
            <h2 className="text-4xl font-bold text-white text-center my-5">Summary calories</h2>
            <div className="flex flex-col item-center md:flex-row md:justify-between gap-5">
                
                <CaloriesDisplay 
                    calories={caloriesConsumed} 
                    text=" Total Calories Consumed" 
                />
                <CaloriesDisplay 
                    calories={caloriesBurned} 
                    text=" Total Calories Burned" 
                />
                <CaloriesDisplay 
                    calories={netCalories} 
                    text=" Balance" 
                />
        
            </div>
        </>
    );
}