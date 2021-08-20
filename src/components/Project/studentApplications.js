import React, { useEffect, useHistory } from 'react';
import Navbar from '../Navbar';
import Datatable from "./datatable";

const StudentApplications = () => {
    const credentials = localStorage.getItem('currentUser');
    const [data, setData] = React.useState([]);
    const [query, setQuery] = React.useState("");

    const getApplicants = async() => {
        var myHeaders = new Headers();
        myHeaders.set('Authorization', 'Basic ' + credentials);
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
          };
         
          let response;
    
          try {
              response = await fetch (process.env.REACT_APP_API_ENDPOINT +"/applications/owner", requestOptions)
          } catch (err) {
              console.log("Incorrect Password. Please Retry.");
              return;
          }
          const result = await response.json();
          setData(result);
      };
      
      console.log(data);
      const user_uid= data["user-uid"];
      console.log(user_uid);

      useEffect(() => {
        getApplicants();
        
      }, []);

      return(
        <div>
          <div>
            <h1>Filter</h1>
          </div>
        
          <div>
            <Datatable data={data} />
          </div>
        </div>
      )
}

export default StudentApplications;