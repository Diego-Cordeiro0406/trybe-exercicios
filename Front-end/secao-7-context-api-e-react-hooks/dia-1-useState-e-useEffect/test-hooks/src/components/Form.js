import React, { useState } from 'react';

function Form() {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [city, setCity] = useState('');
    const [module, setModule] = useState('');

    return(
        <>
            <h1>Formulario pessoa estudante</h1>
            <form>
                <label htmlFor='inputName'>
                Nome:
                    <input
                        id='inputName'
                        type='text'
                        value={name}
                        onChange={({target}) => setName(target.value)}
                    />
                </label>
                <label htmlFor='inputAge'>
                Idade:
                    <input
                        id='inputAge'
                        type='number'
                        value={age}
                        onChange={({target}) => setAge(target.value)}
                    />
                </label>
                <label htmlFor='inputCity'>
                Cidade:
                    <input
                        id='inputCity'
                        type='text'
                        value={city}
                        onChange={({target}) => setCity(target.value)}
                    />
                </label>

                <label htmlFor='fundamentos'>Fundamentos:</label>
                <input
                    id='fundamentos'
                    name='modules'
                    type='radio'
                    value='fundamentos'
                    checked={module === 'fundamentos'}
                    onChange={({target}) => setModule(target.value)}
                />  

                <label htmlFor='frontend'>Front-end:</label>
                <input
                    id='frontend'
                    name='modules'
                    type='radio'
                    value='front-end'
                    checked={module === 'front-end'}
                    onChange={({target}) => setModule(target.value)}
                />     

                <label htmlFor='backend'>Back-end:</label>
                <input
                    id='backend'
                    name='modules'
                    type='radio'
                    value='back-end'
                    checked={module === 'back-end'}
                    onChange={({target}) => setModule(target.value)}
                />     

                <label htmlFor='cs'>Ciêcia da computação:</label>
                <input
                    id='cs'
                    name='modules'
                    type='radio'
                    value='ciencia da computação'
                    checked={module === 'ciencia da computação'}
                    onChange={({target}) => setModule(target.value)}
                />                      
            </form>
        </>
    );
}

export default Form;