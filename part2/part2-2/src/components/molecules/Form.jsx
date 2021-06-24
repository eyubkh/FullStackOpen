export function Form({setInfo,info,addContact}){

    function handleChangeName(event) {
        setInfo({
          ...info,
          name: event.target.value
        })
      }
      function handleChangeTlf(event) {
        setInfo({
          ...info,
          tlf: event.target.value
        })
      }

    return (
      <form className="content_form" onSubmit={addContact}>
          <input 
            type="text" 
            onChange={handleChangeName} 
            value={info.name} 
            placeholder="New Contact..."
            required
          />
          <input 
            type="tel" 
            pattern="[0-9]{9}"
            onChange={handleChangeTlf} 
            value={info.tlf} 
            placeholder="Telephone..."
            required
          />
          <button>add</button>
        </form>
    )
  }