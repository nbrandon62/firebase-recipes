import React, { useEffect } from "react";
import CategoryList from "../components/CategoryList";
import ImageAndInfoReverse from "../components/ImageAndInforReverse";
import ImageAndInfo from "../components/ImageAndInfo";
import Jumbrotron from "../components/Jumbrotron";
import LoginForm from "../components/LoginForm";

import chef2 from '../images/chef2.avif';

const imageAndInfoProps = {
  description:
    "The recipes are divided into three categories: protein, starch, and vegetables. The recipes are written by ex chefs, home cooks, and the like. There is no mega scrolling through a life story to get to the ingredients list. There's only the ingredients and the method, just like in a restaurant. Unlike in a restaurant, the recipes are meant to serve as a guide for the dish. Hopefully this website will help you figure out what to cook this week, and the week after that.",
};

const browseProps = {
  description: "#cheflife at home is a source of inspiration. I've linked YouTube to the footer of this site because it serves as a great tool for recipe research. My typical order of operations when it comes to researching a new dish to cook at home is: look at [insert food delivery app] to see what I would buy, write down the dishes I would buy and will now cook, go to YouTube to find the yummiest looking recipe. So grab a recipe from this site, look up how to make it, if you don't like what you see, look it up on YouTube and do it your way. It's your world. We're just living in it. ",
  image: chef2
}

const jumboProps = {
  header: "#cheflife #livelaughlove"
}

const Home = ({ existingUser }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <LoginForm existingUser={existingUser} />
      <ImageAndInfo  description={imageAndInfoProps.description} />
      <Jumbrotron  header={jumboProps.header}/>
      <ImageAndInfoReverse description={browseProps.description} image={browseProps.image} />
      {/* <CategoryList /> */}
    </div>
  );
};

export default Home;
