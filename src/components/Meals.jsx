import { React, useState } from 'react';
import { useGlobalContext } from '../context';


const Meals = () => {
  const context = useGlobalContext();
  console.log(context);

  const { meals, loading, selectMeal } = useGlobalContext();


  //If loading set to true render loading...
  if (loading) {
    return <section className="section">
      <h4>Loading...</h4>
    </section>
  }

  if (meals.length < 1) {
    return <section className="section">No Recipes, Sorry.</section>
  }








  return (
    <section className="section-center">
      {
        meals.map((m) => {
          return (

            <article key={m.idMeal} className="single-meal">
              <img className="img" onClick={() => selectMeal(m.idMeal)} src={m.strMealThumb} style={{ width: '200px', cursor: "pointer" }}></img>
              <footer>
                <h5>{m.strMeal}</h5>
              </footer>

            </article>
          )
        })
      }

    </section>
  );


};


export default Meals;
