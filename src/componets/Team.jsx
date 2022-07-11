import React from "react";
import './Index.css'

// async function TeamName (){
//     const [name, setName] = useState('')
//     const [squad, setsquad] = useState('')
    

//     const handleName  = (e) => {
//         setName(e.target.value)
//     }
//     const handleSave = (e) => {
//         e.preventDefault()
//         setsquad([...squad, {name: name}])
//         setName('')
//     }
//     console.log(squad);
//         return (
//             <div>
//                 <h3>hi there</h3>
//             <form onSubmit={(e) => handleSave(e)}>

//             <input type='text' placeholder='team name' onChange={(e) => handleName(e)} value={name}></input>
//             <button type="submit" id="ten">+</button>
//             </form>

//         </div>
//     )
// }

function Team (props) {
    //const [state, setState] = useState([])
    // function deleteCharacter(character) {
    //     fetch("http://localhost:4040/Team/"+ character.id, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(character)
    //     })
    //     .then(res => res.json())
    //     .then(data => setState(data))
         
       
        
    // }

    
    const teamList = props.squad.map(character => {
        return(
            <div className="squad-display" key={character.id}>

            <div id="scooter" >
               <h2>{character.Name}</h2> 
                <img id='squadpic' src={character.iconPic}/>
                <img id="inputs" src={character.inputImg}/>
                <button id={character.id} onClick={() => props.deleteSquadMember(character)}>Delete</button>
            </div>
            </div>
        )
    })
   ;
    
    return(
        <div className="team-list">
               {teamList}
              </div>
          );
       
}


export default Team;