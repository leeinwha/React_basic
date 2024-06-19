import './App.css';

function AppJSX() {
  const name ='이나';
  const list = ['우유', '딸기', '바나나','요거트'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>Hellow!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
      style={{width: '200px', height: '300px'}}
      src='https://images.unsplash.com/photo-1717866545967-68fdae38861b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      alt='nature'
      />
    </>
    
  );
}

export default AppJSX;
