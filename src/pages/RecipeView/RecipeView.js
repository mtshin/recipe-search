import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Spinner, Card, Button, AnchorButton, Icon, Classes } from "@blueprintjs/core";

import { getRecipeById } from "../../actions/recipeActions";
import { removeHTMLTags } from "../../utils/helpers";
import Image from "../../components/image/Image";

const Meta = ({ title, description }) => {
  return (
    <span style={{ marginRight: 10 }}>
      <strong>{title}</strong>
      {": "}
      {description}
    </span>
  );
};

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const RecipeView = () => {
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipes.recipeInfo);
  const loading = useSelector((state) => state.interface.loading.recipeView);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getRecipeById(id));
  }, [id, dispatch]);

  if (loading) {
    return <Spinner intent="warning" />;
  }

  return (
    <div style={styles.container}>
      <Link to="/">
        <Button style={styles.backButton} icon="arrow-left" text="Back" minimal />
      </Link>
      <Card className={loading && Classes.SKELETON} elevation={2} style={styles.card}>
        <Image
          src={
            recipe.image
              ? recipe.image
              : "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
          }
          alt={recipe.title}
          style={styles.imgContainer}
        />
        <AnchorButton
          href={recipe.sourceUrl}
          target="_blank"
          style={styles.sourceButton}
          text="Source"
          icon={<Icon icon="globe" iconSize="calc(5px + 1vmin)" />}
          minimal
        />
        <div style={styles.recipeInfoContainer}>
          <span style={styles.title}>{recipe.title}</span>
          <div style={styles.summary} className="line-clamp">
            {removeHTMLTags(recipe.summary)}
          </div>
          <div style={styles.divider} />
          <div style={styles.meta}>
            <Meta title="Course" description={recipe.dishTypes ? recipe.dishTypes.join(", ") : "Any"} />
            <Meta title="Ready in" description={`${recipe.readyInMinutes} min`} />
          </div>
          <div style={styles.meta}>
            <Meta title="Diets" description={recipe.diets ? recipe.diets.join(", ") : "N/A"} />
            <Meta title="Servings" description={`${recipe.servings}`} />
          </div>
          <div style={styles.meta}>
            <Meta
              title="All Ingredients"
              description={
                recipe.extendedIngredients
                  ? recipe.extendedIngredients.map((ingredient) => ingredient.name).join(", ")
                  : "N/A"
              }
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

const styles = {};

styles.container = {
  position: "relative",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "#caeffc"
};

styles.card = {
  marginTop: "calc((70px + 25vmin)/2)",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "calc(90vmin)",
  borderRadius: 10,
  marginBottom: "5vmin"
};

styles.recipeInfoContainer = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginTop: "calc((50px + 20vmin)/2)"
};

styles.title = {
  fontSize: "calc(5px + 2vmin)",
  fontFamily: "Maison,sans-serif",
  fontWeight: 800,
  textAlign: "center",
  marginBottom: "1vmin"
};

styles.summary = {
  fontSize: "calc(8px + 1vmin)",
  fontFamily: "Maison,sans-serif",
  textAlign: "center",
  marginBottom: "1vmin"
};

styles.meta = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  marginTop: "1.5vmin",
  fontSize: "calc(5px + 1vmin)",
  fontFamily: "Maison,sans-serif"
};

styles.imgContainer = {
  position: "absolute",
  top: "calc(-1 * (50px + 20vmin)/2)",
  left: "auto",
  right: "auto",
  width: "calc(50px + 20vmin)",
  height: "calc(50px + 20vmin)",
  objectFit: "cover",
  borderRadius: 15,
  border: "5px solid #fff"
};

styles.backButton = {
  position: "absolute",
  fontSize: "calc(8px + 1vmin)",
  fontFamily: "Maison,sans-serif",
  color: "#004968",
  left: 10,
  top: 10
};

styles.sourceButton = {
  position: "absolute",
  top: 8,
  right: 8,
  fontSize: "calc(5px + 1vmin)",
  fontFamily: "Maison,sans-serif"
};

styles.divider = {
  height: 1,
  backgroundColor: "#636363",
  width: "100%",
  margin: "2vmin 0 1vmin"
};

RecipeView.propTypes = {};

export default RecipeView;
