import React from 'react';
import { useHistory } from 'react-router-dom';
import "./CategoryList.css";



function CategoryList() {

const history=useHistory();
function getCategory(category){
	history.push("/category/"+ category+"/");
}
    return (
        <div>
		<div className="cat-head">
			<span className="head-text">Fashion and Lifestyles</span>
		</div>
		<br></br>
		<div className="category">
      <div class="card-container">
	<img class="round" src="https://img.freepik.com/free-photo/three-young-beautiful-smiling-girls-trendy-summer-casual-jeans-clothes-sexy-carefree-women-posing-positive-models-sunglasses_158538-4730.jpg?size=626&ext=jpg" alt="girls-fashion" />
	<h3>Girls Fashion</h3>
	
	<p>All purpose dresses for <br/> girls and women.</p>

	<div class="buttons" >
		<button class="primary" value="Girls Fashion" onClick={(e) => getCategory(e.target.value)}>
			Explore
		</button>
	</div>

</div>
 <div className="category">
      <div class="card-container">
	<img class="round" src="https://i.insider.com/54fdc12decad042920ceb0c8?width=800&format=jpeg" alt="boys-dresses" />
	<h3>Men Clothing</h3>
	
	<p>An exclusive deals and collection<br/> for men and boys.</p>
	<div class="buttons">
		<button class="primary" value="Men Clothing" onClick={(e) => getCategory(e.target.value)}>
		   Explore
		</button>
	</div>

</div>

        </div>
         <div className="category">
      <div class="card-container">
	<img class="round" src="https://cdn.shopify.com/s/files/1/0008/4973/9820/files/FW19Website_1_x800.jpg?v=1567845218" alt="kids" />
	<h3>Kids Wear</h3>
	
	<p>All purpose clothes for <br/> babies and kids.</p>
	<div class="buttons">
		<button class="primary" value="Kids Wear" onClick={(e) => getCategory(e.target.value)}>
			Explore
		</button>
	</div>

</div>

        </div>

		
        </div>
		</div>
    )
}

export default CategoryList
