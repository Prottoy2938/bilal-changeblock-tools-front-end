export const selectStyles = {
    control: (provided, state) => ({
      ...provided,
      // border: state.isFocused ? '1px solid #afb5c0a1' : '1px solid #afb5c0a1',
      borderRadius: '8px',
      border: '1px solid #afb5c0a1',
      boxShadow: 'none',
      padding: '7px 12px 7px 14px',
      fontFamily: 'Satoshi',
      fontWeight: 500,
      color:'#5B5D58',
      backgroundColor:'transparent',
      cursor: 'pointer',
      '&:hover': {
        borderColor: '#afb5c0a1',
      }
   
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#CFE8A6' : '#F3FAE9',
      color: '#5B5D58', // Set the color of the option text to white
      padding: '8px 29px 8px 19px',
      fontSize: '14px',
      cursor: 'pointer',
      fontFamily: 'Satoshi',
      borderBottom: '1px solid #afb5c0a1',
      borderTop: 'none',
      marginBottom: '0',
      marginTop: '0',
      transition: '0.2s ease-in',
      position: 'relative', 
      zIndex: 9999,
      '&:hover': {
        backgroundColor: '#CFE8A6',
        color: '#5B5D58'
      }
    }),
    menu: (provided, state) => ({
      ...provided,
      // background: '#F3FAE9',
      background: 'red',
      boxShadow: 'none',
      zIndex: 9999,
    }),
    menuList: (provided, state) => ({
      ...provided,
      padding: '0',
      marginTop: '-7px',
      marginBottom: '0',
      borderRadius: '5px',
      backgroundColor: '#F3FAE9',
      zIndex: 9999,
      position: 'relative', 
      border: '1px solid #afb5c0a1', // Add borderTop to the menuList
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transition: 'transform 0.3s', // Add transition for smooth rotation effect
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null, // Rotate the arrow when menu is open
      color: '#afb5c0a1'
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#5B5D58' // Set the color of the selected text to white
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#5B5D58' // Set the color of the placeholder text to white
    })
};

export const selectStylesMob = {
    control: (provided, state) => ({
      ...provided,
      // border: state.isFocused ? '1px solid #afb5c0a1' : '1px solid #afb5c0a1',
      borderRadius: '8px',
      border: '1px solid #afb5c0a1',
      boxShadow: 'none',
      padding: '4px 7px 4px 7px',
      fontFamily: 'Satoshi',
      fontWeight: 500,
      color:'#5B5D58',
      fontSize: 14,
      backgroundColor:'transparent',
      cursor: 'pointer',
      '&:hover': {
        borderColor: '#afb5c0a1',
      }
   
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#CFE8A6' : '#F3FAE9',
      color: '#5B5D58', // Set the color of the option text to white
      padding: '8px 29px 8px 19px',
      fontSize: '14px',
      cursor: 'pointer',
      fontFamily: 'Satoshi',
      borderBottom: '1px solid #afb5c0a1',
      borderTop: 'none',
      marginBottom: '0',
      marginTop: '0',
      transition: '0.2s ease-in',
      position: 'relative', 
      zIndex: 9999,
      '&:hover': {
        backgroundColor: '#CFE8A6',
        color: '#5B5D58'
      }
    }),
    menu: (provided, state) => ({
      ...provided,
      // background: '#F3FAE9',
      background: 'red',
      boxShadow: 'none',
      zIndex: 9999,
    }),
    menuList: (provided, state) => ({
      ...provided,
      padding: '0',
      marginTop: '-7px',
      marginBottom: '0',
      borderRadius: '5px',
      backgroundColor: '#F3FAE9',
      zIndex: 9999,
      position: 'relative', 
      border: '1px solid #afb5c0a1', // Add borderTop to the menuList
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transition: 'transform 0.3s', // Add transition for smooth rotation effect
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null, // Rotate the arrow when menu is open
      color: '#afb5c0a1'
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#5B5D58' // Set the color of the selected text to white
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#5B5D58' // Set the color of the placeholder text to white
    })
};

