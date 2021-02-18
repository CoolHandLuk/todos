import React from 'react'

const Form = ({inputText, setInputText, todos, setTodos, setStatus})=> {
    const inputHandler = (e)=> 
      setInputText(e.target.value);

    const submitHandler = (e)=> {
        
        if(inputText !==''){
            e.preventDefault();
            setInputText('');
            setTodos([...todos, {text:inputText, completed: false, id: Math.random()*1000}])
        } else {
            e.preventDefault();
            setInputText('');
            alert('wpisz treść zadania ;-)')
        }
       
    }

    const checkStatus = (e) => {
        setStatus(e.target.value)
        console.log(e.target.value)
      };
      
    
    return (
        <>
        <form className="form">
                <input className="form__input" value={inputText} onChange={inputHandler} type="text" placeholder="Wpisz swoje zadanie"/>
                <button className="form__button" onClick={submitHandler}><i class="fas fa-plus-square"></i></button>
           <div className="custom-select">
            <select className="form__select" onClick={checkStatus}>
                <option className="form__select" >Wszystkie</option>
                <option className="form__select" >Zrobione</option>
                <option className="form__select" >Niezrobione</option>
            </select>
            <span className="custom-arrow"></span>
            </div>
        </form>
        </>
    )

}

export default Form;