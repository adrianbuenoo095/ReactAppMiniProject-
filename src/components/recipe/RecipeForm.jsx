const RecipeForm = ({ submit, RecipeTitle, change, image }) => {
  return (
    <form onSubmit={submit}>
      <label>
        Text:
        <input
          name="RecipeTitle"
          type="text"
          value={RecipeTitle}
          onChange={change}
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="file"
          accept="image/*"
          value={image}
          name="image"
          onChange={change}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RecipeForm;
