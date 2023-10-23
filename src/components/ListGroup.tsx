function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London"];
  // items = [];

  // if(items.length === 0)
  //     return(
  //         <>
  //             <h1>List Group</h1>
  //             <p>No item found</p>
  //         </>
  //         );

  // const message = items.length === 0 ? <p>No item found</p> : null;

  return (
    <>
      <h1>List Group</h1>
      {/* {message} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="listGroup">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button 
      onClick={() => console.log("clicked")}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >Click me</button>
      <h1 className="text-3xl font-bold underline text-red-600">Hello world!</h1>
    </>
  );
}

export default ListGroup;
