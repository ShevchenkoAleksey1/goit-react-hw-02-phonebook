const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label>
        Find contacs
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
};
export default Filter;
