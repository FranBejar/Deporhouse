import {useEffect,useState,useContext,createContext} from "react";
import Swal from "sweetalert2";

export const Notification = ({ type, text }) => {
    useEffect(() => {
      if (text) {
        Swal.fire({
          title: type.charAt(0).toUpperCase() + type.slice(1),
          text: text,
          icon: type === 'success' ? "success" : "error",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      }
    }, [type, text]);
  
    return null;
  };

const NotificationContext = createContext({ setNotification: () => {}});

export const NotificationProvider = ({children}) => {
    const [notificationData, setNotificationData] = useState({
        type: 'success',
        text: ''
    })

    const setNotification = (type,text) => {
        setNotificationData({type,text});
    

        setTimeout(() => {
            setNotificationData({type: 'success', text: ''})
        },3000)
    }
    
    return (
        <NotificationContext.Provider value={{setNotification}}>
            <Notification {...notificationData}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}