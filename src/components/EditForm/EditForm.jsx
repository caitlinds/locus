import './EditForm.css';

export default function EditForm({user, tweet}) {
  function handleChange() {
    alert('editing...')
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('saving');
  }

  return (
    <>
      <form className="flex-ctr-column" onSubmit={handleSubmit}>
        <textarea name="content" value={tweet.content} onChange={handleChange}></textarea>
        <button type="submit">Save</button>
      </form>
    </>
  );
}