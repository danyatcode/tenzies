export default function Die(props){
    return(
            <div 
                style={{backgroundColor : props.isHeld? "#59E391":"white"}} 
                className="tenzy" 
                onClick={props.holdDice}
            >
                {props.value === 6 && 
                <div style={{flexWrap : "wrap", display: 'flex', width: '100%', height: '100%', alignItems : 'center', justifyContent : 'space-evenly'}}>
                    <div className="dots"></div>    
                    <div className="dots"></div>    
                    <div className="dots"></div>    
                    <div className="dots"></div>    
                    <div className="dots"></div>    
                    <div className="dots"></div>    
                </div>
                } 
                {props.value === 5 && 
                <div style={{flexWrap : "wrap", display: 'flex', width: '100%', height: '100%', alignItems : 'center', justifyContent : 'space-evenly'}}>
                    <div className="dots"></div>    
                    <div className="dots"></div>    
                    <div className="dots" style={{width : '100%'}}></div>    
                    <div className="dots"></div>    
                    <div className="dots"></div>    
                </div>
                } 
                {props.value === 4 && 
                <div style={{flexWrap : "wrap", display: 'flex', width: '100%', height: '100%', alignItems : 'center', justifyContent : 'space-evenly'}}>
                    <div className="dots"></div>    
                    <div className="dots"></div>    
                    <div className="dots"></div>    
                    <div className="dots"></div>     
                </div>
                } 
                {props.value === 3 && 
                <div style={{flexWrap : "wrap", display: 'flex', width: '100%', height: '100%', alignItems : 'center', justifyContent : 'space-evenly'}}>
                    <div className="dots"></div>    
                    <div className="dots"></div>    
                    <div className="dots"></div>     
                </div>
                } 
                {props.value === 2 && 
                <div style={{flexWrap : "wrap", display: 'flex', width: '100%', height: '100%', alignItems : 'center', justifyContent : 'space-evenly'}}>
                    <div className="dots"></div>    
                    <div className="dots"></div>    
                </div>
                } 
                {props.value === 1 && 
                <div style={{flexWrap : "wrap", display: 'flex', width: '100%', height: '100%', alignItems : 'center', justifyContent : 'space-evenly'}}>
                    <div className="dots"></div>    
                </div>
                } 
            </div>
    )
}