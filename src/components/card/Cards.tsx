import { useEffect, useState } from 'react'
import Card from './Card'
import { IonCard } from '@ionic/react'
import { useStateContext } from '../../context/ContextProvider';

function Cards(){
    const { allActive, setAllActive } = useStateContext();
    const [items, setItems] = useState([
        { id: 1, img: '/img/1.jpg', stat: "" },
        { id: 1, img: '/img/1.jpg', stat: "" },
        { id: 2, img: '/img/2.jpg', stat: "" },
        { id: 2, img: '/img/2.jpg', stat: "" },
        { id: 3, img: '/img/3.jpg', stat: "" },
        { id: 3, img: '/img/3.jpg', stat: "" },
        { id: 4, img: '/img/4.jpg', stat: "" },
        { id: 4, img: '/img/4.jpg', stat: "" },
        { id: 5, img: '/img/5.jpg', stat: "" },
        { id: 5, img: '/img/5.jpg', stat: "" },
        { id: 6, img: '/img/6.jpg', stat: "" },
        { id: 6, img: '/img/6.jpg', stat: "" },
        // { id: 7, img: '/img/7.jpg', stat: "" },
        // { id: 7, img: '/img/7.jpg', stat: "" },
        // { id: 8, img: '/img/8.jpg', stat: "" },
        // { id: 8, img: '/img/8.jpg', stat: "" },
        // { id: 9, img: '/img/9.jpg', stat: "" },
        // { id: 9, img: '/img/9.jpg', stat: "" },
    ].sort(() => Math.random() - 0.5))

    // Check if all cards are active
    useEffect(() => {
      if (items.every(item => item.stat === 'correct')) {
        setAllActive(true);
      } else {
        setAllActive(false);
      }
    }, [items]);
  
    const [prev, setPrev] = useState(-1)

    function check(current:any){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 500)
        }
    }

    function handleClick(id:any){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    return (
      <IonCard className='main'>
        <div className="container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
        </div>
      </IonCard>
    )
}

export default Cards