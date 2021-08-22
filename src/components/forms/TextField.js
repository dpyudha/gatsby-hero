import React from "react";
import propTypes from "prop-types";
import styled from "styled-components"

const TextFieldWrapper = styled.div`
  padding:${props => props.theme.spacings.medium} ${props => props.theme.spacings.large};
  border-radius: 2.625rem;
  background-color: ${props => props.theme.colors.blue};
  margin-top: ${props => props.theme.spacings.medium};
  text-align:left;
  label {
    display:block;
    font-size: 0.8125rem;
    line-height: 1.1875rem;
    color: ${props=> props.theme.colors.dark}
  }

  input {
    appearance: none;
    border: none;
    background: transparent;
    font-size: 1.25rem;
    line-height:1.25rem;
    width:100%;
    color: ${props=> props.theme.colors.grey};
    &:focus{
      outline:none;
    }
  }
    
  input::placeholder { 
    color: ${props=> props.theme.colors.grey};
    opacity: 1; 
  }
    
  }
`


class TextField extends React.Component {
  render() {
    const { label, name, placeholder, onInput } = this.props;
    return (
      <TextFieldWrapper>
        <label><strong>{label}</strong></label>
        <input 
          type="text"
          name={name}
          placeholder={placeholder}
          onInput={onInput}
        />   
      </TextFieldWrapper>
    )
  }
}

TextField.propTypes = {
  label: propTypes.string,
  name: propTypes.string,
  placeholder: propTypes.string,
  icon: propTypes.string,
  onInput: propTypes.func
}

export default TextField