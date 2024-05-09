import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase";

const MovieComponent = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    console.log("hello");
    const getPostsFromFirebase = [];
    const subscriber = db.collection("movies").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getPostsFromFirebase.push({ ...doc.data(), key: doc.id });
      });
      setPosts(getPostsFromFirebase);
      setLoading(false);
    });
    return () => subscriber();
    //  db.collection("movies").onSnapshot((snapshot) => {
    //   snapshot.docs.map((doc) => {

    //     console.log(recommends);
    //     switch (doc.data().type) {
    //       case "recommend":
    //         recommends = [...recommends, { id: doc.id, ...doc.data() }];
    //         break;

    //       case "new":
    //         newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
    //         break;

    //       case "original":
    //         originals = [...originals, { id: doc.id, ...doc.data() }];
    //         break;

    //       case "trending":
    //         trending = [...trending, { id: doc.id, ...doc.data() }];
    //         break;
    //     }
    //   });

    //   dispatch(
    //     setMovies({
    //       recommend: recommends,
    //       newDisney: newDisneys,
    //       original: originals,
    //       trending: trending,
    //     })
    //   );
    // });
  }, [loading]);

  if (loading) {
    return <h1>loading firebase data...</h1>;
  }

  return (
    <Container>
      <Content>
      {posts.length > 0 ? 
        posts.map((movie, key) => 
          <Wrap key={key}>
            {movie.id}
            <Link to="/detail${movie.id}">
              <img src={movie.cardImg} alt={movie.title} />
            </Link>
          </Wrap>
  ) : (
    <h1>no</h1>
  )}
      </Content>
    </Container>
  );
};

const Container = styled.section`
  padding: 0 0 26px;
  margin-top: 5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: grid;
  padding: 5px;

  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  /* margin-bottom: 10vw;
      width: 100%; */
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default MovieComponent;
