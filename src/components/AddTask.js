import React, {useState} from 'react'

const AddTask = ({onAdd}) => {
  const [formData, setFormData] = useState({
    text: "",
    day: "",
    reminder: false,
  })

  const handleChange = (e) =>{
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setFormData({...formData, [name] : value})
  }

  const onsubmit = (e) =>{
    e.preventDefault();
    if(!formData.text){
      alert('Please enter text!')
      return
    }

    onAdd(formData)

    setFormData({
      text: "",
      day: "",
      reminder: false,
    });
  }

  return (
    <form className="add-form" onSubmit={onsubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          id="task"
          name="text"
          value={formData.text}
          onChange={handleChange}
          type="text"
          placeholder="Add Text"
        />
      </div>

      <div className="form-control">
        <label htmlFor="day">Day &amp; Time</label>
        <input
          type="text"
          placeholder="Add Text"
          id="task"
          name="day"
          value={formData.day}
          onChange={handleChange}
        />
      </div>

      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input 
          type="checkbox"
          id="reminder"
          name="reminder"
          value={formData.reminder}
          onChange={handleChange}
          checked={formData.reminder}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
      
    </form>
  )
}

export default AddTask
