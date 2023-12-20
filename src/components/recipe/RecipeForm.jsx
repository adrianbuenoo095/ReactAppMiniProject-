const RecipeForm = ({ submit, name, change, image }) => {
    return (
        <form onSubmit={submit}>
            <label>
                Text:
                <input name="name" type="text" value={name} onChange={change} />
            </label>
            <br />
            <label>
                Image:
                <input type="file" accept="image/*" value={image} name="image" onChange={change} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default RecipeForm;
