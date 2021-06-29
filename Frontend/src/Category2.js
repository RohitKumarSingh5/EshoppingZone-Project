import React from 'react';
import { useHistory } from 'react-router-dom';
import "./category2.css";


function Category2() {
	const history=useHistory();
function getCategory(category){
	history.push("/category/"+ category+"/");
}
    return (
          <div>
		<div className="cat-head">
			<span className="head-text">Electronics And Gadgets</span>
		</div>
		<br></br>
		<div className="category">
      <div class="card-container">
	<img class="round" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202005/mibookpro_0.jpeg?ikxsywW.QZ5qY0zj7GdEv9Yo7M1oOtpo&size=770:433" alt="user" />
	<h3>Laptops</h3>
	
	<p>An exclusive deals on all purpose  <br/> Laptops and Accessories</p>
	<div class="buttons">
		<button class="primary" value="Laptops" onClick={(e) => getCategory(e.target.value)}>
			Explore
		</button>
	</div>

</div>
 <div className="category">
      <div class="card-container">
	<img class="round" src="https://blogimg.servicetree.in/blogimgs/modern-refri.jpg" alt="user" />
	<h3>Refrigerators</h3>
	
	<p>Refrigerators available at<br/> exclusive prices</p>
	<div class="buttons">
		<button class="primary" value="Rerigerators" onClick={(e) => getCategory(e.target.value)}>
			Explore
		</button>
	</div>

</div>

        </div>
         <div className="category">
      <div class="card-container">
	<img class="round" src="https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="user" />
	<h3>Mobiles and Tablets</h3>
	
	<p>All top brand mobiles and <br/> tablets available.</p>
	<div class="buttons">
		<button class="primary" value="Mobiles and Tablets" onClick={(e) => getCategory(e.target.value)}>
			Explore
		</button>
	</div>

</div>

        </div>

		
        </div>
		</div>
    )
}

export default Category2
