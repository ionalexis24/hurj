import React from 'react';
import {Route, useLocation} from 'react-router-dom';


class PortfolioPage extends React.Component{
    constructor(props){
        super(props);
        this.state={ 
            count: 0,
            propozitie: this.props.spania
        };
    }
    render(){
        
        return(
            <div>
                <button
                onClick={()=>{this.setState({count: this.state.count + 1})}}
                >
                    Apasa-ma {this.state.propozitie}
                </button>
                <div>Am fost apasat de {this.state.count} ori</div>
            </div>
        )
    }
}

export default PortfolioPage;