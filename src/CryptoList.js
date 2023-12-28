import React  from "react";
import CryptoCard from "./CryptoCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



function CryptoList({movieData}){

    
    return(

        <div className="crypto-list">
            <Container>
                <Row className="row row-cols-lg-3">
            {

                movieData.map((movie,index)=>{
                    return(
                        <CryptoCard 
                        key={index}
                        image={movie.image.medium}
                        id={movie.id}
                        name={movie.name}
                        airdate={movie.airdate}
                        rating={movie.rating.average}
                        type={movie.type}

                        />
                    )
                })
            }
            </Row>
           </Container>
        </div>
    )
}
export default CryptoList;