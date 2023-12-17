
const RecipeForm = () => {

    // const [file, setFile] = useState();


    // const handleChangeFile = (event) => {
    //     const currentFile = event.target.files[0];
    //     setFile(...currentFile, [event.target.name] : currentFile)
    //     let formData = new FormData();
    //     formData.append('file', file);
    // }


    return (
        <>
            <form>
                <input name="query" />
                <input type="" namez="query" value={file} onChange={handleChangeFile} />
                <button type="submit">Search</button>
            </form>
        </>
    );
}

export default RecipeForm;