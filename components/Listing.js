import React from "react";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import placeholder from "../public/placeholder.jpg";
const Listing = ({ image }) => {
	return (
		<div className="listing card">
			<div className="card-header">
				<div className="card-media">
					<Image
						src={image || placeholder}
						alt=""
						width="380px"
						height="250px"
					/>
				</div>
				<div className="card-top">
					<div className="rating">
						<Rating
							name="read-only"
							value={4}
							// onChange={(event, newValue) => {
							// 	setValue(newValue);
							// }}
						/>
					</div>
					<div className="card-button">
						<button className="btn btn-secondary">SAVE</button>
					</div>
				</div>
				<div className="list-categories">
					Diversity, Salon , Travel{" "}
					<button className="btn btn-primary">OPEN</button>
				</div>
				<div className="description">
					<div className="card-title">
						<h5>This is The Listing Title</h5>
					</div>
					<div className="desc">
						<span className="icon"></span>
						<p>Location</p>
					</div>
					<div className="desc">
						<span className="icon"></span>
						<p>Contact</p>
					</div>
					<div className="desc">
						<span className="icon"></span>
						<p>Posted 4 Days Ago</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Listing;

// export default function MediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image="/static/images/cards/contemplative-reptile.jpg"
//         alt="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
