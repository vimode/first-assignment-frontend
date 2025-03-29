export default function InputCheckBox({title,attribute}) {
  return (
      <div>
        <label htmlFor={attribute}>{title}</label>
        <input type="checkbox" id={attribute} name={attribute} />
      </div>
  )
}