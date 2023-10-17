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
        StampedFn.init({ apiKey: '2809bb1f-a1ca-4c22-bdbe-5346a0a59b49', storeUrl: 'stamped-poc.vercel.app', sId: '303927' });
        StampedFn.on('stamped:init:starting', function(){
            StampedFn.initRewards({
                customCustomerId: '123',
                customerId: "916da630-459b-4c6d-af1f-600a770a27a2",
                customerEmail: 'nigel2@yopmail.com',
                customerFirstName: 'nigel',
                customerLastName: 'david',
                authToken:'28e368011b03d39205fc699fdc2e5e928207f76cb31d25dbf8e6b6df60a37dbe',
                isAcceptMarketing: true,
            });
        });
       }
const Stamped = () => {
    return (<Script type="text/javascript" src="https://cdn1.stamped.io/files/widget.min.js" onLoad={loadStamped}/>)
}

export default Stamped;