"use client";
import Script from "next/script";
declare global {
    interface Window {
        StampedFn: any;
    }
}
let StampedFn:any;
const loadStamped = () => {
    console.log("here1");
    StampedFn = window.StampedFn;
        StampedFn.init({ apiKey: '2809bb1f-a1ca-4c22-bdbe-5346a0a59b49', storeUrl: 'stamped-poc.vercel.app', sId: '303927' });
        StampedFn.on('stamped:init:starting', function(){
            console.log("here2");
            StampedFn.initRewards({
                customerId: '4f2b3477-127f-4c32-bf0c-c64187b62331', // your own internal numeric ID of the customer
                customerEmail: 'nigelcustomer@yopmail.com',
                customerFirstName: 'nigel',
                customerLastName: 'david',
            });
        });
       }
const Stamped = () => {
    return (<Script type="text/javascript" src="https://cdn1.stamped.io/files/widget.min.js" onLoad={loadStamped}/>)
}

export default Stamped;