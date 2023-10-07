import { IonCard, IonCol, IonRow } from '@ionic/react';
import { useState } from 'react';
import Cards from '../components/card/Cards';
import { useStateContext } from '../context/ContextProvider';

const Home = () => {
  const { allActive, setAllActive } = useStateContext();
  const [randPic, setrandPic] = useState([
    { id: 1, img: '/img/1.jpg', stat: "" },
    { id: 2, img: '/img/2.jpg', stat: "" },
    { id: 3, img: '/img/3.jpg', stat: "" },
    { id: 4, img: '/img/4.jpg', stat: "" },
    { id: 5, img: '/img/5.jpg', stat: "" },
    { id: 6, img: '/img/6.jpg', stat: "" },
    { id: 7, img: '/img/7.jpg', stat: "" },
    { id: 8, img: '/img/8.jpg', stat: "" },
    { id: 9, img: '/img/9.jpg', stat: "" },
    { id: 10, img: '/img/10.jpg', stat: "" },
].sort(() => Math.random() - 0.5))

  return (
    <div className="App">
      <h1>MEME-MORY GAME</h1>
      <IonRow>
        <IonCol className='ion-text-center col-img-container'>
          { randPic.slice(0,1).map((item, index) => (
            <IonCard className={`${allActive ? "show-img":"hidden-img"}`}><img src={item.img} alt="" /></IonCard>
          )) }
        </IonCol>
        <IonCol><Cards /></IonCol>
      </IonRow>
    </div>
  )
}

export default Home