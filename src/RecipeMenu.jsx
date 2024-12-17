import React from "react";

export default function RecipeMenu(props) {
  const [displayCount, setDisplayCount] = React.useState(3);

  const loadMore = () => {
    setDisplayCount(displayCount + 3);
  }
  
  return (
    <div>
      <div className={"recipeMenuCardContainer"}>
        {props.recipes.results.slice(0,displayCount).map((recipe, index) => (
          <div key={index} className={"recipeCard"}>
            <div>
              <h3 className={'recipeCardText'}>{recipe.title}</h3>
            </div>
            <img className={'recipeCardImage'} src={recipe.image}/>
          </div>
        ))}
      </div>
        <div className='loadMoreButtonContainer'>
          <button className='loadMoreButton' onClick={loadMore}>Load More</button>
        </div>
    </div>
    /*
    <div>
      <div>This will be a recipe card</div>
      <div>This will be a recipe card</div>
      <div>This will be a recipe card</div>
    </div>*/
  );
}
