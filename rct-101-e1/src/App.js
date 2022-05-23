
const container={ 


marginBottom: '50px',
marginLeft: '5%',
marginright:'5%',

}








function App() {
  return (
    <div>
     <h2 style={container}>Task App</h2> 
    <h2>Count:1</h2>
    <input type={"text"} placeholder={"select task"}/>
    
    
    <input type={"submit"}value={"Add Task"} />
                
               
                    
                
               
    </div>
  );
}

export default App;
