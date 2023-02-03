import React from "react";
import Header from "../components/Header";
import ImageAndInfo from "../components/ImageAndInfo";
import LoginForm from "../components/LoginForm";


const imageAndInfoProps = {
  description:
    "This website serves as a place to gain inspiration when creative exhaustion hits. The recipes are divided into three categories: protein, starch, and vegetables. The recipes are written like something you might find in a Chez Panisse cookbook. There is no mega scrolling through a life story to get to the ingredients list, only the ingredients, and the method, just like in a restaurant. Unlike in a restaurant, the recipes are meant to serve as a guide for the dish. Hopefully this website will help you figure out what to cook this week, and the week after that.",
};

const Home = ({ existingUser }) => {
  return (
    <div>
      <Header />
      <LoginForm existingUser={existingUser} />
      <ImageAndInfo  description={imageAndInfoProps.description} />
    </div>
  );
};

export default Home;
