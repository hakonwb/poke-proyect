import "./BattleScreen.css";

const BattleScreen = ({
  myPokeSelection,
  computerSelection,
  enemyHealth,
  Health,
}) => {
  console.log({ myPokeSelection });
  console.log({ computerSelection });

  return (
    <div className="battle-container">
      <div className="enemy-container">
        <h1>{enemyHealth}</h1>
        <img src={computerSelection[0].sprites.front_default} alt="" />
      </div>
      <div className="my-container"><h1>{Health}</h1>
        <img src={myPokeSelection[0].sprites.front_default} alt="" /></div>
        
    </div>
  );
};

export default BattleScreen;
