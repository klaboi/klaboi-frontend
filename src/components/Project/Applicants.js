import React, { useEffect } from 'react';
import Navbar from '../Navbar';

const Applicants = () => {
    const credentials = localStorage.getItem('currentUser');
    const [data, setData] = React.useState([]);
    const history = useHistory();

    const getUser = async() => {
        var myHeaders = new Headers();
        myHeaders.set('Authorization', 'Basic ' + credentials);
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
          };
         
          let response;
    
          try {
              response = await fetch (process.env.REACT_APP_API_ENDPOINT +"/users", requestOptions)
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
        getUser();
        
      }, []);

      return(
        <h1>Hello!</h1>
      )
}

export default Applicants;