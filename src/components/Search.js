function Search({ press, input }) {
  return (
    <div>
      <label>Zip Code:</label>
      <input type="text" onChange={input}></input>
      <button onClick={() => press()}>Search</button>
    </div>
  );
}

export default Search;
