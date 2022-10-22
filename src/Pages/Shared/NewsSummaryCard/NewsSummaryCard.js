import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { BsEyeFill, BsFillBookmarkStarFill, BsFillShareFill, BsStarFill } from "react-icons/bs";

const NewsSummaryCard = ({ news }) => {
   // console.log(news);
   const { _id, title, author, details, image_url, total_view, rating } = news
   return (
      <Card className="mb-5 shadow">
         <Card.Header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
               <Image
                  className='me-2'
                  roundedCircle
                  src={author?.img}
                  style={{ height: '60px' }}
               ></Image>
               <div>
                  <p>
                     {author?.name}
                  </p>

               </div>
            </div>
            <div>
               <BsFillBookmarkStarFill className='me-2' />
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
                     <span>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></span>
                     :
                     <span>{details}</span>
               }
            </Card.Text>

         </Card.Body>
         <Card.Footer className="d-flex justify-content-between align-items-center">
            <div>
               {author?.published_date}
            </div>
            <div className=' d-flex align-items-center'>
               <BsStarFill className='text-warning me-1' />
               <span>{rating?.number}</span>
               <span className='ms-1'>{rating?.badge}</span>
               <BsEyeFill className='ms-3 me-1' />
               {total_view}
            </div>
         </Card.Footer>
      </Card>
   );
};

export default NewsSummaryCard;