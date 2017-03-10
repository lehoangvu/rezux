import React from 'react';
import ContainerSearch from './../containers/ContainerSearch';
import Player from './../components/Player';

class App extends React.Component{
   constructor(props){
        super(props);
   } 

   render(){
        return (
            <div>
                <ContainerSearch />
                {this.props.children}
            </div>
        );
   }
}

export default App;
