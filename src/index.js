import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function AddressLabel({mailingLabel, className}){
    const { name, addressLine1, addressLine2  } = mailingLabel;

    return(
        <div className={`mailing-label ${className}`}>
            <div classname="name"> {name} </div>
            <div className="addressLine1">{addressLine1}</div>
            <div className="addressLine2"> {addressLine2}</div>
        </div>
    );
}

function Stamp() {
    return <div className="stamp">Stamp</div>;
  }

AddressLabel.propTypes = {
    mailingLabel: PropTypes.shape({
        name: PropTypes.string.isRequired,
        addressLine1: PropTypes.string.isRequired,
        addressLine2: PropTypes.string.isRequired
    }).isRequired
};

function Envelope({toPerson, fromPerson}){
    return (
    <div>
        <AddressLabel className="to-label" mailingLabel={fromPerson} />
        <AddressLabel className="from-label" mailingLabel={toPerson} />
        <Stamp />
    </div>
    )
}

Envelope.propTypes={
    toPerson: PropTypes.object,
    fromPerson: PropTypes.object
};

var returnLabel = {
    name: 'Mr Sender',
    addressLine1: '123 fake St',
    addressLine2: 'Boston, MA 02118'
};

var recipientLabel ={
    name: 'Mr Recevier',
    addressLine1: '123 Fake St',
    addressLine2: 'Boston, MA 02118'
};

ReactDOM.render(<Envelope toPerson={recipientLabel} fromPerson={returnLabel} />, document.getElementById('root'));
