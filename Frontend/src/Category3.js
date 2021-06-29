import React from 'react';
import { useHistory } from 'react-router-dom';
import "./category3.css";

function Category3() {
		const history=useHistory();
function getCategory(category){
	history.push("/category/"+ category+"/");
}
    return (
         <div>
		<div className="cat-head">
			<span className="head-text">Interiors and Home Decor</span>
		</div>
		<br></br>
		<div className="category">
      <div class="card-container">
	<img class="round" src="https://cb2.scene7.com/is/image/CB2/GalleryFrmBrssWhtMtFHF18/$web_pdp_main_carousel_xs$/190905023449/gallery-brass-frames-with-white-mats.jpg" alt="user" />
	<h3>Frames and Paintings</h3>
	
	<p>All purpose frames and paintings<br/> available</p>
	<div class="buttons">
		<button class="primary" value="Frames and Paintings" onClick={(e) => getCategory(e.target.value)}>
		Explore
		</button>
	</div>

</div>
 <div className="category">
      <div class="card-container">
	<img class="round" src="https://images-na.ssl-images-amazon.com/images/I/618hlD8QZIL._AC_SX466_.jpg" alt="user" />
	<h3>Lamps and decors</h3>
	
	<p>All season decoratives and table lamps <br/> available at best prices.</p>
	<div class="buttons">
		<button class="primary" value="Lamps and decors" onClick={(e) => getCategory(e.target.value)}>
			Explore
		</button>
	</div>

</div>

        </div>
         <div className="category">
      <div class="card-container">
	<img class="round" src="https://images-na.ssl-images-amazon.com/images/I/61AssSXffkL._SL1024_.jpg" alt="user" />
	<h3>Stickers and Decoratives</h3>
	
	<p>All types of decoratives, stickers  <br/> and balloons available.</p>
	<div class="buttons">
		<button class="primary" value="Stickers and Decoratives" onClick={(e) => getCategory(e.target.value)}>
			Explore
		</button>
	</div>

</div>

        </div>

	
        </div>
		</div>
    )
}

export default Category3
