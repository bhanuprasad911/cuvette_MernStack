import { useState } from "react";

function App() {
  const [summary, setSummary] = useState({});
  const [rname, setRname] = useState("");
  const [iname, setIname] = useState("");
  const [iquantity, setIquantity] = useState(0);
  const [iunits, setUnits] = useState("NA");
  const [ingredientList, setIngredientList] = useState([]);
  const [prepTime, setPrepTime] = useState(0);
  const [insruct, setInstructions] = useState("");

  function additem() {
    if (iname.trim() && parseInt(iquantity) > 0) {
      setIngredientList([
        ...ingredientList,
        { name: iname, quantity: parseInt(iquantity), units: iunits },
      ]);
      setIname("");
    setIquantity(0);
    setUnits("NA");
      
    } else {
      alert("Please fill all the fields correctly");
    }
  }

  const removeIngredient = (index) => {
    setIngredientList(ingredientList.filter((item, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!rname.trim() || ingredientList.length === 0 || prepTime <= 0) {
      alert("Please fill in all required fields");
      return;
    }

    const recepie = {
      name: rname,
      ingredients: ingredientList,
      prepTime: parseInt(prepTime),
      instructions: insruct,
    };
    setSummary(recepie);
    
    console.log(recepie);
  };
  const clearForm=()=>{
    setIname("");
    setIquantity(0);
    setUnits("NA");
    setRname("");
    setIngredientList([]);
    setPrepTime(0);
    setInstructions("");

  }


  return (
    <>
      <div className="App">
        <div className="form">
          <header className="App-header">Recipe Builder</header>

          <label htmlFor="rn">Recipe name:</label><br />
          <input type="text" id="rn" value={rname} onChange={(e) => setRname(e.target.value)}/><br />

          <label htmlFor="in">Ingredients:</label><br />
          <div className="ing">
            <label htmlFor="name">Name:</label>{" "}
            <input type="text" id="name"value={iname} onChange={(e) => setIname(e.target.value)} />
            <label htmlFor="quantity">Quantity:</label>{" "}
            <input type="number" id="quantity" value={iquantity} onChange={(e) => setIquantity(parseInt(e.target.value))}/>
            <label htmlFor="unit">Unit:</label>{" "}
            <select id="unit" value={iunits} onChange={(e) => setUnits(e.target.value)}>
              <option value="NA">Select</option>
              <option value="cups">cups</option>
              <option value="g">grams</option>
              <option value="ml">ml</option>
              <option value="ts">tablespoons</option>
              <option value="ns">numbers</option>
            </select>
            <button id="adding" onClick={additem}>Add</button>
          </div>
          {ingredientList.map((item, index) => (
            <p key={index}>{item.name} - {item.quantity} {item.units}{" "}<button onClick={() => removeIngredient(index)}>Remove</button></p>
          ))}

          <label htmlFor="inst">Instructions:</label><br />
          <textarea id="inst" value={insruct} onChange={(e) => setInstructions(e.target.value)}></textarea>
          <label htmlFor="prep-time">Preparation time (minutes):</label>
          <input type="number" id="prep-time" value={prepTime} onChange={(e) => setPrepTime(parseInt(e.target.value))}/><br />
          <button id="submit" onClick={handleSubmit}>Submit</button>
          <button onClick={clearForm}>Clear</button>
        </div>
      </div>
      <h3>Recipe Summary</h3>
      {summary.name ? (
        <>
          <p>
            <strong>Name:</strong> {summary.name}
          </p>
          {summary.ingredients && summary.ingredients.length > 0 ? (
            summary.ingredients.map((item, index) => (
              <p key={index}>
                {item.name} - {item.quantity} {item.units}
              </p>
            ))
          ) :null}
          <p><strong>Preparation Time:</strong> {summary.prepTime} minutes</p>
          <p>
            <strong>Instructions:</strong> {summary.instructions || "No instructions provided"}
          </p>
        </>
      ) :null}
    </>
  );
}

export default App;
