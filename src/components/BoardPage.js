import React from "react";
import data from "../data.json";
import Board from "react-trello";
import { createTranslate } from 'react-trello'

const TEXTS = {
    "Add another lane": "Novo Grupo",
    "Click to add card": "Novo Card",
    "Delete lane": "Deletar",
    "Lane actions": "Opções",
    "button": {
        "Add lane": "Novo Grupo",
        "Add card": "Novo Card",
        "Cancel": "Cancelar"
    },
    "placeholder": {
        "title": "Titulo",
        "description": "descriçäo",
        "label": "demanda"
    }
}

export default function BoardPage() {
    return (
        <div className="BoardPage">
            <Board style={{ backgroundColor: 'white' }}
                data={data}
                t={createTranslate(TEXTS)}
                editable
                canAddLanes>
            </Board>
        </div>
    );
}
