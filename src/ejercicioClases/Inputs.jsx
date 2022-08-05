const Input = ({label, name, handleChange}) => {
    return (
        <div>
        <label style={{marginRight:4}}> {label} </label>
        <input name={name} type="text" onChange={handleChange} />
        </div>
      );
}
 
export default Input;{laber, name, handleChange}