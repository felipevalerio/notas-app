import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CreateNote from '../pages/CreateNote';

// '/' -> Página Inicial
// '/create' -> CreateNote
// '/update' -> CreateNote com os dados carregados
// '/update/:id' -> Ação do botão salvar, salvando as alterações
// '/delete/:id' -> Ação do botão deletar, deletando a nota selecionada

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/create" component={CreateNote}/> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;