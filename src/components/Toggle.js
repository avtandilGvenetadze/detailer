import "../styles/toggle.css";

function Toggle(props) {
  return (
    <div className="toggle-wrapper">
      <p className="language-p">ქარ / Eng</p>
      <label className="switch" >
        <input
        
          type="checkbox"
          checked={props.isChecked}
          onChange={props.handleCheckboxChange}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default Toggle;
