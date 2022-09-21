
import React ,{Fragment} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';


import"../App.css"

const DetailsScreen = () => {
  const params = useParams()
  const navigate = useNavigate()


  const handleBackButtonClick =() =>{
    navigate("/")
  }

  return (
    <Fragment>
      <div className="back-button-container">
          <Header/>
          <Button onClick={handleBackButtonClick}>Voltar</Button>
        <div className="task-details-container">
          <h2 className='details-title'>{params.taskTitle}</h2>
          <p className='details-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque harum atque dolore tempore, nihil quos ipsa perferendis 
          </p>
        </div>
      </div>
    </Fragment>
    )
}

export default DetailsScreen 