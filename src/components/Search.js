function Search({ press, input }) {
  return (
    <div className="search">
      <form onSubmit={press}>
        <label>Zip Code: </label>
        <input type="text" onChange={input}></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Search;
