import wazrix from '../assets/wazrix.png';
import bit from '../assets/bit.png';
import colodax from '../assets/colodax.jpeg';
import zebpay from '../assets/zebpay.png';


const priceTableData = [
    {
        id: 1,
        platform: "WazirX",
        lastPrice: "₹ 25,72,612",
        buyPrice: "₹ 25,72,610",
        sellPrice: "₹ 25,72,612",
        difference: "-3.14%",
        savings: "₹ 83,498",
        savingsNegative: true,
        imageUrl: wazrix
    },
    {
        id: 2,
        platform: "Bitbns",
        lastPrice: "₹ 28,83,906",
        buyPrice: "₹ 28,55,164",
        sellPrice: "₹ 28,82,157",
        difference: "8.58%",
        savings: "₹ 2,27,796",
        savingsNegative: false,
        imageUrl: bit,
    },
    {
        id: 3,
        platform: "Colodax",
        lastPrice: "₹ 25,46,035",
        buyPrice: "₹ 25,33,304",
        sellPrice: "₹ 28,51,559",
        difference: "-4.14%",
        savings: "₹ 1,10,074",
        savingsNegative: true,
        imageUrl: colodax,
    },
    {
        id: 4,
        platform: "Zebpay",
        lastPrice: "₹ 26,50,000",
        buyPrice: "₹ 26,49,999",
        sellPrice: "₹ 26,21,000",
        difference: "-0.23%",
        savings: "₹ 6,110",
        savingsNegative: true,
        imageUrl: zebpay,
    }
];

export default priceTableData;
