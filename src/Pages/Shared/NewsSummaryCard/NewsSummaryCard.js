import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { BsFillBookmarkStarFill, BsFillShareFill } from "react-icons/bs";

const NewsSummaryCard = ({ news }) => {
   console.log(news);
   const { _id, title, author, details, image_url, total_view } = news
   return (
      <Card className="mb-5">
         <Card.Header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
               <Image
                  className='me-2'
                  roundedCircle
                  src={author.img}
                  style={{ height: '60px' }}
               ></Image>
               <div>
                  <p>
                     {author.name}
                  </p>

               </div>
            </div>
            <div>
               <BsFillBookmarkStarFill />
               <BsFillShareFill />
            </div>
         </Card.Header>
         <Card.Body>
            <Card.Title>
               {title}
            </Card.Title>
            <Card.Img variant="top" src={image_url} />
            <Card.Text>
               {
                  details.length > 250 ?
                     <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link> </p>
                     :
                     <p>{details}</p>
               }
            </Card.Text>

         </Card.Body>
         <Card.Footer className="text-muted">
            <p>
               {author.published_date}
            </p>
         </Card.Footer>
      </Card>
   );
};

export default NewsSummaryCard;