import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';

const AppContext = React.createContext()

//Everything that we may want to be accessible from anywhere in the application will be found here, using context.

const AppProvider = ({ children }) => {

  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);


  //Urls for API
  const allMealsUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php"

  //Fetches Data 
  const fetchMeals = async (url) => {
    setLoading(true);
    try {

      const data = await axios(url)

      if (data.data.meals) {
        setMeals(data.data.meals);
      } else {
        setMeals([]);
      }




    } catch (err) {
      console.log(err.response)
    }
    setLoading(false);
  }

  // First render load allMeals
  useEffect(() => {
    fetchMeals(allMealsUrl)
  }, [])




  //If search qyert is changed then we will fetch new meals
  useEffect(() => {
    //if (!searchQuery) return

    if (searchQuery.length > 1) {
      fetchMeals(`${allMealsUrl}${searchQuery}`)
    }

  }, [searchQuery])


  
  //Handles clicking on an individual meal
  const selectMeal = (idMeal) => {
    let meal;

    meal = meals.find((meal) => meal.idMeal == idMeal);

    setSelectedMeal(meal);
    setShowModal(!showModal);
    console.log(showModal);

    
    
  }

  //Closes popup modal 
  const closeModal = () => {
    setShowModal(!showModal);
  }




  return (
    <AppContext.Provider value={{ meals, loading, setSearchQuery, showModal, selectMeal, selectedMeal, closeModal}}>

      {children}


    </AppContext.Provider>
  )
}



export const useGlobalContext = () => {
  return useContext(AppContext)
}


export { AppContext, AppProvider }