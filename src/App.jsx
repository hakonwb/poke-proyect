import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokemonessrc from './assets/components/Pokemonessrc';
import BattleScreen from './assets/components/BattleScreen';


function App() {
  const [pokemones,setPokemones]= useState('')
  const[position,setposition] = useState(0);
  const[myPokeSelection, setMyPokeSelection] = useState([]);


  const pokeUrl= 'https://pokeapi.co/api/v2/pokemon';


  const [startgame,setstartgame] =useState(false);

 const [computerSelection, setComputerSelection] =useState ([]) 
  const [Health,sethealth] = useState(100);
  const [enemyHealth,setenemyHealth] = useState(100);


  //const[myhealth,enemyhealth] = useState(100);

  const fetchData =async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  const attack = () => {
    const myAttack = Math.floor(Math.random() 
  * 50)

    setenemyHealth(enemyHealth - myAttack)
    setTimeout(() => {enemyattack()}, 1000)
  }

  const enemyattack = () => {
    const Attack = Math.floor(Math.random() 
    * 50)
    sethealth(Health-Attack)
  }

  const pokemonData = async (pokeUrl) => {

    const response =await fetchData(pokeUrl);

    const datapromises =response.results.map((poke)=> (
      fetchData(pokeUrl + '/' + poke.name)
    ));
    const pokemonimg= await Promise.all(datapromises)
    setPokemones(pokemonimg);
  };

  const handleselection=(foward) =>{
    console.log(foward)
    if(foward && position < pokemones.length){
      setposition(position+1);
    }
    else if(!foward && position > 0){
      setposition(position-1);
    }
    console.log(position)

  }

  const FilterSelection=()=>{
    console.log(position);
    console.log(pokemones);
    const mySelection =pokemones.filter((value,idx)=> position == idx) 
    setMyPokeSelection(mySelection);
    console.log(mySelection);

    computerSelectionFn();
  }
  useEffect(()=>{
    pokemonData(pokeUrl);
  },[]);

  const computerSelectionFn =()=>{
    const computerPos = Math.floor(Math.random()* 20);
    const computerSelectionEL = pokemones.filter((value, idx) => computerPos == idx);

    setComputerSelection(computerSelectionEL)
    console.log(computerSelection)

  }
  


  const handlestart = () => {
    setstartgame(true);
  };

  return (
    <>
    <div className='main-container'>
      {}
      <div className='layout-game'>
        <div className='screen-container'>
          <div className='screen-layout'>
            { startgame ? (
            <BattleScreen 
              myPokeSelection={myPokeSelection} 
              computerSelection={computerSelection}
              Health={Health}
              enemyHealth={enemyHealth} 
              />
            )
            :(
            pokemones &&<Pokemonessrc pokemones={pokemones} position={position}/>
            )
            }
          </div>
        </div>
        <h1>Nintendo GAMEBOY</h1>
        <div className='button-container'>
          <div className='container-pad'>
            <div><button className='button-left' onClick={()=> handleselection(false)}></button></div>
            <div><button className='button-up'></button><button className='button-down'></button></div>
            <div><button className='button-rigth' onClick={()=> handleselection(true)}></button></div>
          </div>

          <div className='container-select'>
            <div className='container-select-btn'>
              <button className='btn-start' onClick={()=> handlestart()}></button>
              <div>start</div>
            </div>
            <div className='container-start'>
              <button className='btn-select' onClick={()=> FilterSelection()}></button>
              <div>select</div>
            </div>
          </div>
          <div className='container-action'>
            <div className='button-b-container'>
              <button className='button-b'></button>
                <div className='B'>B</div>
                </div>
            <div className='button-a-container'>
              <button className='button-a' onClick={attack}></button>
               <div className='A'>A</div>
               </div>
          </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
