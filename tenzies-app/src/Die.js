export default function Die(props){
    return(
            <div 
                style={{backgroundColor : props.isHeld? "#59E391":"white"}} 
                className="tenzy" 
                onClick={props.holdDice}
            >
                {props.value} 
            </div>
    )
}