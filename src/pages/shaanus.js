import React from "react"
import Layout from "../components/layout/layout"
import Image from "../components/images/images"

const Items = [
  
  {
    image: "med1mms.jpg",
    name: "Annar Infusion Tea ",
    price: "₹30",
  },
  {

    image: "med2mms.jpg",
    name: "Camomile Infusion Tea",
    price: "₹30",
  },
  {
    image: "med3mms.jpg",
    name: "Kullhad Tea",
    price: "₹15",
  },
  {

    image: "med4mms.jpg",
    name: "Kullhad Kesri Tea",
    price: "₹40",
  },
  {
    image: "med5mms.jpg",
    name: "Lemon Ice Tea",
    price: "₹50",
  },
  {

    image: "med6mms.jpg",
    name: "Strawberry Ice Tea",
    price: "₹120",
  },
  {

    image: "med7mms.jpg",
    name: "Peach Ice Tea",
    price: "₹120",
  },
  {

    image: "med8mms.jpg",
    name: "Lychee Ice Tea",
    price: "₹120",
  },
  {
    image: "med9mms.jpg",
    name: "Malabar Parantha (Served with Chole, Curd & Salad)",
    price: "₹80",
  },
  {
    image: "med10mms.jpg",
    name: "Malabar Parantha (Served with Shahi Paneer, Curd & Salad)",
    price: "₹90",
  },

  {
    
    image: "med11mms.jpg",
    name: "Aloo Paratha (2 Ps, Desi Ghee)",
    price: "₹100",
  },
  

  {
    image: "med12mms.jpg",
    name: "Paneer Masala Parantha (1 Ps Large, Desi Ghee)",
    price: "₹100",
  },
  {
    image: "med13mms.jpg",
    name: "Onion Parantha (2 Ps, Desi Ghee)",
    price: "₹100",
  },
  {
    image: "med14mms.jpg",
    name: "Chola Bhatura",
    price: "₹100",
  },
  {
    image: "med15mms.jpg",
    name: "Pao Bhaji",
    price: "₹70",
  },
  {
    image: "med16mms.jpg",
    name: "Stuff Kulcha",
    price: "₹100",
  },
  {
    image: "med17mms.jpg",
    name: "Pani Puri (6 pcs.)",
    price: "₹20 & ₹25",
  },

{
    image: "med18mms.jpg",
    name: "Papri Chaat",
    price: "₹60",
  },
  {
    image: "med19mms.jpg",
    name: "Dahi Puri (6 pcs.)",
    price: "₹60",
  },
  {
    image: "med20mms.jpg",
    name: "Pindi Masala Aloo Tikki",
    price: "₹50",
  },
  {
    image: "med21mms.jpg",
    name: "Dahi Bhalla",
    price: "₹60",
  },
  {
    image: "med22mms.jpg",
    name: "Bhalla Papri Chaat",
    price: "₹60",
  },
  {
    image: "med23mms.jpg",
    name: "Raj Kachori",
    price: "₹60",
  },
  {
    image: "med24mms.jpg",
    name: "Idly Sambhar (3 pcs.)",
    price: "₹60",
  },
  {
    image: "med25mms.jpg",
    name: "Fried Idly (3 pcs.)",
    price: "₹70",
  },
  {
    image: "med26mms.jpg",
    name: "Tawa Idly",
    price: "₹70",
  },
  {
    image: "med27mms.jpg",
    name: "Plain Dosa",
    price: "₹70",
  },
  {
    image: "med28mms.jpg",
    name: "Masala Dosa",
    price: "₹90",
  },
  {
    image: "med29mms.jpg",
    name: "Onion Dosa",
    price: "₹90",
  },
  {
    image: "med30mms.jpg",
    name: "Paneer Dosa",
    price: "₹120",
  },
  {
    image: "med31mms.jpg",
    name: "Cheese Dosa",
    price: "₹130",
  },
  {
    image: "med32mms.jpg",
    name: "Onion Uttapam",
    price: "₹100",
  },
  {
    image: "med33mms.jpg",
    name: "Tomato Uttapam",
    price: "₹100",
  },
  {
    image: "med34mms.jpg",
    name: "Tomato Onion",
    price: "₹100",
  },
  {
    image: "med35mms.jpg",
    name: "Mix Veg. Uttapam",
    price: "₹120",
  },
  {
    image: "med36mms.jpg",
    name: "Veg. Fried Rice",
    price: "₹90",
  },
  {
    image: "med37mms.jpg",
    name: "Chilly Patato",
    price: "₹100",
  },
  {
    image: "med38mms.jpg",
    name: "Chinese Bhel",
    price: "₹100",
  },
  {
    image: "med39mms.jpg",
    name: "Chilly Garlic Fried Rice",
    price: "₹100",
  },
  {
    image: "med40mms.jpg",
    name: "Veg. Manchurian Dry/Gravy",
    price: "₹120",
  },
  {
    image: "med41mms.jpg",
    name: "Honey Chilly Potato",
    price: "₹130",
  },
  {
    image: "med42mms.jpg",
    name: "Veg. Noodles (Rice & Aata)",
    price: "₹130",
  },
  {
    image: "med43mms.jpg",
    name: "Chilly Garlic Noodles",
    price: "₹140",
  },
  {
    image: "med44mms.jpg",
    name: "Hakka Fried Rice",
    price: "₹150",
  },
  {
    image: "med45mms.jpg",
    name: "Hakka Noodles",
    price: "₹160",
  },
  {
    image: "med46mms.jpg",
    name: "Chilly Paneer Dry/Gravy",
    price: "₹160",
  },
  {
    image: "med47mms.jpg",
    name: "Singapore Noodles",
    price: "₹170",
  },
  {
    image: "med48mms.jpg",
    name: "Chilly Mushroom Dry",
    price: "₹170",
  },
  {
    image: "med49mms.jpg",
    name: "Crispy Baby Corn",
    price: "₹170",
  },
  {
    image: "med50mms.jpg",
    name: "Chilly Baby Corn",
    price: "₹170",
  },
  {
    image: "med51mms.jpg",
    name: "Tomato soup",
    price: "₹70",
  },
  {
    image: "med52mms.jpg",
    name: "Hot & Sour soup",
    price: "₹70",
  },
  {
    image: "med53mms.jpg",
    name: "Talumein soup",
    price: "₹70",
  },
  {
    image: "med54mms.jpg",
    name: "Manchow soup",
    price: "₹70",
  },
  {
    image: "med55mms.jpg",
    name: "Sweet Corn",
    price: "₹70",
  },
  {
    image: "med56mms.jpg",
    name: "Economic cakes (pineapple, vanilla, chocolate, black forest)",
    price: "₹300",
  },
  {
    image: "med57mms.jpg",
    name: "Chocolate truffle cake (500 gm.)",
    price: "₹400",
  },
 
 
]


export default function mms() {
  return (<Layout>
  <div className="container text-center py-3">
      <h2 className="pb-2 border-bottom text-center">Mahesh Medical Store</h2>
      <div className="row justify content center">
        {Items.map((item, i) => {
          return (
            <div key={i} className="col-lg-3 col-md-3 col-sm-3 ">
              <div className="card card-body mb-3">
                <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    margin: "0 auto",
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename={item.image}
                  alt="1"
                />
                <h3 className="m-1">{item.name}</h3>
                <h2 className="m-3">{item.price}</h2>
                <button type="button" class="btn btn-outline-dark my-2">Add to cart</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  
  
  </Layout>
  
  )
}