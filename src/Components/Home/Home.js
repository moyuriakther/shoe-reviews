import React from "react";

const Home = () => {
  return (
    <div className="flex justify-between mt-5 pt-5">
      <div className="home-left mt-5 pt-5 w-3/5	">
        <h1 className="text-6xl font-bold">
          Your Next Shoe <br />{" "}
          <span className="text-sky-700">Your Best Shoe</span>{" "}
        </h1>
        <p className="my-5 text-justify">
          This site is run by shoe fanatics. We judge people by their shoes.
          Besides being sneaker fanatics, one of us ran around the world,
          another ran a marathon in 2:30 and a third is a 1500m OL-games
          participant. Meet the team To make things simple, each athletic shoe
          and sneaker gets a score from 1-100 called the CoreScore. The higher
          the score, the better the reviews.
        </p>
        <button class="bg-transparent hover:bg-blue-500 text-sky-700 font-semibold hover:text-white py-2 px-4 border border-sky-500 hover:border-transparent rounded">
          Live Demo
        </button>
      </div>
      <div>
        <img
          style={{ height: "400px" }}
          src="https://www.solereview.com/wp-content/uploads/2022/08/Nike_Pegasus_39_side-view-1024x802.jpg"
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Home;
