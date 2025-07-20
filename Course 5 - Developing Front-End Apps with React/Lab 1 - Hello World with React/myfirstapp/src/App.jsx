function App(props) {
    const currDate = new Date();
  
    return (
      <div>
        <h1>Hello, Don!</h1>
        <h2>The date and time now is {currDate.toLocaleDateString()} {currDate.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  export default App;