import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from 'react-router-dom';

function Veggie() {
    const [Veggie, setVeggie] = useState([]);
    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {

        const check = localStorage.getItem("Veggie");
        if (check) {
            setVeggie(JSON.parse(check));
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
            );
            const data = await api.json();
            localStorage.setItem("Veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes);
            console.log(data.recipes);
        }
    };
    return (

        <div>
            <Wrapper>
                <h3>Our Veggetarian Picks</h3>
                <Splide options={{
                    perPage: 2,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '5rem',
                }}>
                    {Veggie.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <Link to={'/recipe/'+ recipe.id}>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title} />
                                        <Gradient />
                                    </Link>
                                    </Card>
                            </SplideSlide>
                        );
                    })
                    }
                </Splide>
            </Wrapper>
        </div>
    )
}
const Wrapper = styled.div`
 margin: 0rem 0rem;
`;
const Card = styled.div`
 min-height: 29rem;
 border-radius:2rem;
 overflow: hidden;
 postion: relative;

 img{
    border-radius: 4rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 70%;
    object-filt: cover;

 }
 p{
     postion: absolute;
     z-index: 10;
     left: 50%;
     bottom: 0%;
     transform: translate(0%, 0%);
     color: black;
     width: 100%;
     text-algin: center;
     font-weight: 600;
     font-size: 1rem;
     height: 6rem;
     display: flex;
     justify-content:center;
     align-items: center;
 }
`;

const Gradient = styled.div`
    z-index: 3;
    positon: absulte;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.5));
`

export default Veggie