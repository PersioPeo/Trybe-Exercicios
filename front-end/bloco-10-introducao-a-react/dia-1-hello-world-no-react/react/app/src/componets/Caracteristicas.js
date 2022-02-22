import React from 'react';


class Caracteristicas extends React.Component {
    render() {
        const {informacao} = this.props;
        return (            
        <>
            <div>
                <p>Nome : {informacao.name}</p>
                <p>Tipo : {informacao.type}</p>
                <p>Peso : {informacao.averageWeight.value} Udm: {informacao.averageWeight.measurementUnit}</p>                            
            </div>
            <div>
                <img src={informacao.image} />
            </div>
        </>
        )
    }
}
export default Caracteristicas;