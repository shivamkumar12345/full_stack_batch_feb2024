const dishes =[
    {
      "name": "Chicken Biryani",
      "description": "A flavorful Indian rice dish made with marinated chicken pieces, basmati rice, aromatic spices, and herbs. Served with raita or curry."
    },
    {
      "name": "Paneer Tikka Masala",
      "description": "Cubes of paneer (Indian cottage cheese) marinated in spices, grilled, and then cooked in a rich and creamy tomato-based sauce."
    },
    {
      "name": "Dal Makhani",
      "description": "A creamy lentil dish made with black lentils, kidney beans, butter, and spices, slow-cooked to perfection. Best served with naan or rice."
    },
    {
      "name": "Butter Chicken",
      "description": "Tender chicken pieces cooked in a creamy, buttery tomato-based sauce with aromatic spices. A beloved dish in Indian cuisine."
    },
    {
      "name": "Aloo Gobi",
      "description": "A comforting vegetarian dish made with potatoes (aloo), cauliflower (gobi), and Indian spices, cooked until tender and flavorful."
    },
    {
      "name": "Palak Paneer",
      "description": "Soft paneer cubes cooked in a creamy spinach (palak) gravy with spices and herbs. A nutritious and delicious vegetarian dish."
    },
    {
      "name": "Chole Bhature",
      "description": "A popular North Indian dish consisting of spicy chickpea curry (chole) served with deep-fried bread (bhature)."
    },
    {
      "name": "Rogan Josh",
      "description": "A flavorful Kashmiri lamb curry made with tender pieces of lamb, yogurt, and a blend of aromatic spices. Best enjoyed with naan or rice."
    },
    {
      "name": "Samosa",
      "description": "Crispy pastry filled with spiced potatoes, peas, and sometimes meat. A popular Indian snack or appetizer, often served with chutney."
    },
    {
      "name": "Raita",
      "description": "A refreshing yogurt-based side dish made with yogurt, cucumbers, tomatoes, and spices. Often served with spicy Indian meals to balance the flavors."
    }
  ];

const navSpecial =dishes.filter((val,idx)=>{
  if( !val['description'].includes("chicken") || !val['description'].includes("biryani") || !val['name'].includes("chicken") )
  {
    return true;
  }
  return false;
}).map((val,idx)=>{
  val['name']= val['name'] + " navaratri special";
  return val;
});
console.log(navSpecial);
  