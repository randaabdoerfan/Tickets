import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AddTicketForm.css'

const AddTicketForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: '',
    category: '',
    assignedTo: '',
    dueDate: ''
  })

  const priorities = ['Low', 'Medium', 'High', 'Critical']
  const categories = ['Bug', 'Feature Request', 'Support', 'Infrastructure', 'Documentation']
  const assignees = ['Rasha', 'Ahmed', 'Sara', 'Mohamed', 'Fatima']

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Ticket submitted:', formData)
    navigate('/product')
  }

  const handleCancel = () => {
    navigate('/product')
  }

  return (
    <div className="add-ticket-form">
      <div className="form-header">
        <h1>New Ticket</h1>
        <p>Create a new support ticket</p>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter ticket title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Describe the issue or request"
              rows="4"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="priority">Priority *</label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                required
              >
                <option value="">Select Priority</option>
                {priorities.map(priority => (
                  <option key={priority} value={priority}>{priority}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="assignedTo">Assigned To</label>
              <select
                id="assignedTo"
                name="assignedTo"
                value={formData.assignedTo}
                onChange={handleChange}
              >
                <option value="">Select Assignee</option>
                {assignees.map(assignee => (
                  <option key={assignee} value={assignee}>{assignee}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="dueDate">Due Date</label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="btn btn-send">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTicketForm
