import React from 'react'; 


export default class CalendarLists extends React.Component {



    render() {
        return (
            <div>
                <ul>
                    { 
                        
                        this.props.data && this.props.data.map((datas, i) => {
                            return <li key={datas}>
                                {datas}
                                <a href="#" onClick={this.props.handleDelete }>
                                    [x]
                                </a>
                            </li>
                        })
                    
                
                    }
                </ul>
            </div>
        ); 
    }
}