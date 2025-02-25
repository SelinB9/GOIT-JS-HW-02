function getShippingCost(country) {
    //switch yapısı var if-else gibi bir yapı- Değişkene özel işlemler switch içinde yapılır
    let price;
   switch (country) {
       case "China":
           price = Number(100);
        return`Shipping to ${country} will cost ${price} credits`;
           
       case "Chile":
           price = Number(250);
           return `Shipping to  ${country} will cost ${price} credits`;
          
       case "Australia":
           price = Number(170);
         return `Shipping to ${country} will cost ${price} credit`;

       case "Jamaica":
           price = Number(120);
           return `Shipping to  ${country} will cost ${price} credit`;
           break;

       default:
          return `"Sorry, there is no delivery to your country"`;
        break;
   }
   
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
