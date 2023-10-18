import ProductTable from "./componenets/product";

import StaticTable from "./componenets/table";





function App() {
  return (

    <div className="table">
    <h1 align="center" style={{color:"red"}}>INTERVIEW TASK</h1>
      <StaticTable/>
      

      <ProductTable/>
    </div>
  );
}

export default App;
