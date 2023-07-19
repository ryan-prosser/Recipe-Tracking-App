import React, { useState } from "react";

function RecipeCreate({recipeHandler, recipes}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const initialFormState = {
    name: "", cuisine: "", photo: "", ingredients: "", preparation: "",
  }
  
  const [formData, setFormData] = useState({...initialFormState})
  const handleChange = ({target}) => {
    const value = target.value
    setFormData({
      ...formData,
      [target.name]: value
    })
  }
  
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData)
    recipeHandler(formData)
    setFormData({...initialFormState})
    console.log(recipes)
  }
  
  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name='name' 
                id='name' 
                type='text' 
                placeholder='Name' 
                value={formData.name} 
                onChange={handleChange} />
            </td>
            <td>
              <input name='cuisine' 
                id='cuisine' 
                type='text' 
                placeholder='Cuisine' 
                value={formData.cuisine} 
                onChange={handleChange} />
            </td>
            <td>
              <input name='photo' 
                id='photo' 
                type='url' 
                placeholder='URL' 
                value={formData.photo} 
                onChange={handleChange} />
            </td>
            <td>
              <textarea name='ingredients' 
                id='ingredients' 
                type='text' 
                placeholder='Ingredients' 
                rows={2} 
                value={formData.ingredients} 
                onChange={handleChange} />
            </td>
            <td>
              <textarea name='preparation' 
                id='preparation' 
                type='text' 
                placeholder='Preparation' 
                rows={2} 
                value={formData.preparation} 
                onChange={handleChange} />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;