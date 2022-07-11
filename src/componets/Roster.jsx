import React, {useState, useEffect} from "react";
import Team from './Team'
import './Index.css';


function Roster() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [character, setChar] = useState([])

    const[squad, setSquad] = useState([])
   
    function addCharacter (char){
       
        fetch("http://localhost:4040/Team",{
            method:'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(char)
          })
          .then(res => res.json())
          .then(data => setSquad(data))
    } 

    function deleteCharacter(character) {
        fetch("http://localhost:4040/Team/"+ character.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(character)
        })
        .then(res => res.json())
        .then(data => setSquad(data))   
    }

    useEffect(() => {
      fetch("http://localhost:4040/character")
        .then(res => res.json())
        .then(
            (result) =>{ 
               
                setIsLoaded(true)
                setChar(result)
            },
            (error) => {
                setIsLoaded(true)
                setError(error)
            }
        )
             fetch("http://localhost:4040/Team", {
                 method:'GET'
               })
               .then(res => res.json())
               .then(data => setSquad(data));
            }, [])
    if (error) {
        return <div> ERROR</div>
    } else if (!isLoaded) {
        return <div>loading...</div>
    }else {
           
        return (
            <div className="roster">
                <p>choose your team (3.max)</p>
                <section className="character-display">

                {character.character.map(
                    char => 
                    <button key={char.id} className="rosterbut" id={char.id} onClick={() => addCharacter(char)}>
                            <img id="charpic" alt="tim" src={char.iconPic}/>
                        </button>
                )}
                </section>
                <section className="team-display">

                <Team squad={squad} deleteSquadMember={deleteCharacter} />
                </section>
        </div>
        
        )
    }
}
    export default Roster