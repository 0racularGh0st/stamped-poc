"use client";
import Script from "next/script";
declare global {
    interface Window {
        StampedFn: any;
    }
}
let StampedFn:any;
const loadStamped = () => {
    StampedFn = window.StampedFn;
        console.log(StampedFn)
        StampedFn.init({ apiKey: '5838b789-1743-4d01-9ca1-785a7f0038d8', storeUrl: 'cakedrop.london', sId: '301881' });
        StampedFn.on('stamped:init:starting', function(){
            StampedFn.initRewards({
                customerId: "7323599569198",
                customerEmail: 'nigel.david@founderandlightning.com',
                customerFirstName: 'nigel',
        	    customerLastName: 'david',
                customerLocale: 'en',
                authToken: 'b339583f37add840a994bb5cd462f26e6bfbbdc20637ae3a18d643697667e8c3',
            });
        });
       }
const Stamped = () => {
    return (<Script type="text/javascript" src="https://cdn1.stamped.io/files/widget.min.js" onLoad={loadStamped}/>)
}

export default Stamped;