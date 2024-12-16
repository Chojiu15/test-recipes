import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

const APP_KEY= import.meta.env.VITE_APP_KEY
const APP_ID= import.meta.env.VITE_APP_ID


function App() {
  const [recipes, setRecipes] = useState(null)

  const fetchRecipes = async () => {
    try{
      const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=beef&app_id=${APP_ID}&app_key=${APP_KEY}`)
      setRecipes(response.data.hits)
    }
    catch(err){
      console.log(err)
    }

  }

  useEffect(() => {
    fetchRecipes()
  }, [] )

  console.log(recipes)

  return (
    <>
        <h1>Recipes App</h1>
    </>
  )
}

export default App
