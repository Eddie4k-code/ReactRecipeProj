import React from 'react';
import { useGlobalContext } from '../context';

export const Modal = () => {

  const { showModal } = useGlobalContext();

  //selectedMeal that was clicked!
  const { selectedMeal, closeModal } = useGlobalContext();

  if (showModal) {

    return (

      <aside className="modal-overlay">
        <div className="modal-container">

          <div className="card-title">
            <h1>{selectedMeal.strMeal}</h1>
          </div>


          <img src={selectedMeal.strMealThumb} className="card-img"></img>


          <div className="card-body">{selectedMeal.strInstructions}</div>

          <button onClick={closeModal} className="close-btn">Close</button>




        </div>

      </aside>
    );

  }
};




export default Modal;