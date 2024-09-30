import axios from 'axios';
import i18next from 'i18next';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import PayContext from '../../../contexts/PayContext';
import TicketContext from '../../../contexts/TicketContext';
import AuthContext from '../../../contexts/AuthContext';
const LiqPayCheckout = () => {
    const navigate = useNavigate()
    const {userId} = useContext(AuthContext)
    const {pay, setPayStatus, setPayStatusSucces} = useContext(PayContext)
    const {transportId, selectWagon, tickets, trainLineName, wagonNumber, trainRoute, clientData, sendData} = useContext(TicketContext)
  useEffect(() => {
    pay().then(res=>{
        if(res.status==200) {
          const script = document.createElement('script');
          script.src = "//static.liqpay.ua/libjs/checkout.js";
          script.async = true;
          document.body.appendChild(script);
          script.onload = () => {
          window.LiqPayCheckoutCallback = () => {
              window.LiqPayCheckout.init({
              data: res.data.data,
              signature: res.data.signature,
              embedTo: "#liqpay_checkout",
              language: i18next.language,
              mode: "embed"
              }).on("liqpay.callback", function(data){
                if(data.status == 'failure'){
                  setPayStatus(res.orderId,data.status, transportId, selectWagon, tickets).then(resSetPaySt => {
                    if(resSetPaySt.status==200) {
                        toast.error("Транзакцію відхилено!")
                        navigate('/')
                    } else {
                      toast.error('Виникла помилка виберіть інші місця')
                      navigate('/')
                    }
                  }
              )} else {
                let tickets = clientData.map(c=>{return {firstName: c.firstName, 
                                                          lastName: c.lastName, 
                                                          price: c.price,
                                                          ticketType: c.ticketType,
                                                          email: sendData.email,
                                                          userId:userId}})
                setPayStatusSucces(data.status, res.orderId, trainLineName, transportId, wagonNumber, trainRoute.startTime, trainRoute.endTime, trainRoute.startPoint, trainRoute.endPoint, tickets)
              }
              
              }).on("liqpay.ready", function(data){
              // ready
              }).on("liqpay.close", function(data){
                  
              });
          };
          };

          return () => {
          document.body.removeChild(script);
          };
        } else {
          toast.error('Ой, сталася помилка, виберіть інші місця!')
          navigate(-2)
        } 
      })
  }, []);

  return <div id="liqpay_checkout"></div>;
};

export default LiqPayCheckout;