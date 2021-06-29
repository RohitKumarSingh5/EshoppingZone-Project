import React from 'react';
import { useHistory } from 'react-router-dom';
import "./category4.css";

function Category4() {
			const history=useHistory();
function getCategory(category){
	history.push("/category/"+ category+"/");
}
    return (
       <div>
		<div className="cat-head">
			<span className="head-text">Books And Magazines</span>
		</div>
		<br></br>
		<div className="category">
      <div class="card-container">
	<img class="round" src="https://content.fortune.com/wp-content/uploads/2020/12/Best-Books-2020-Featured-Image.jpg" alt="user" />
	<h3>Novels</h3>
	
	<p>Novels of all languages are available  <br/> at great prices.</p>
	<div class="buttons">
		<button class="primary" value="Novels" onClick={(e) => getCategory(e.target.value)}>
			Explore
		</button>
	</div>

</div>
 <div className="category">
      <div class="card-container">
	<img class="round" src="https://images-na.ssl-images-amazon.com/images/I/71aPUQtNIlL.jpg" alt="user" />
	<h3>Competetive Books</h3>
	
	<p>Books available for all types of exams and <br/> competitions.</p>
	<div class="buttons">
		<button class="primary" value="Competetive Books" onClick={(e) => getCategory(e.target.value)}>
			Explore
		</button>
	</div>

</div>

        </div>
         <div className="category">
      <div class="card-container">
	<img class="round" src="https://vinayravindran.com/wp-content/uploads/2013/05/top-magazines1.jpg" alt="user" />
	<h3>Magazines</h3>
	
	<p>All types of regional, national  and <br/> international latest magazines available.</p>
	<div class="buttons">
		<button class="primary" value="Magazines" onClick={(e) => getCategory(e.target.value)}>
			Explore
		</button>
	</div>

</div>

        </div>

		<br></br>
		<br></br>
        </div>
		</div>
    )
}

export default Category4
