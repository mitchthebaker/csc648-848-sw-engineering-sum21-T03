import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2'; 


const sellerActivitiesSettings = () => {

   return (
    <div className="sellerActivitiesSettings-wrapper">
        <div className="sellerActivitiesSettings-firstContainer">
            <Bar data={{
                labels: ['Sells', 'Posts', 'Active', 'Inactive'], 
                datasets: [ 
                        {
                            label: '# of activities', 
                            data: [12,20,5,8,18,11,21]
                        },
                    ],
                }}
                height={400}
                width={600} 
                options={{
                    maintainAspectRatio: false,
                }}
            />
        </div>
    </div>
   );
};



export default sellerActivitiesSettings;