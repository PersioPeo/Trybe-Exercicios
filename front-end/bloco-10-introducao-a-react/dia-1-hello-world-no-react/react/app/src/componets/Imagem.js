import React from 'react';

class Imagem extends React.Component {
    render () {
        return <img src={this.props.source} alt={this.props.alternativeText} />;
    }
}

export default Imagem;