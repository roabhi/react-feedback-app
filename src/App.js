/*
============================================================

  1-  Components can ONLY return 1 element
  2-  Make your returns inside ()
  2-  Use fragments <></> to wrap what you want to return

  WE CANNOT USE class and (label) for inside Components. Use className and htmlFor instead

============================================================
*/

const App = () => {
  const title = 'page title',
    body = 'This is a blog post',
    comments = [
      { id: 1, text: 'First comment' },
      { id: 2, text: 'Second comment' },
      { id: 3, text: 'Third comment' },
    ],
    commentBlock = (
      // ? Instead of terniary operator with var ? () : () we can use var &&
      // ? () and do not use : as else statament
      <div className="comments">
        <span>There are {comments.length} comments</span>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </div>
    ),
    loading = false,
    showComments = true

  if (loading) return <h1>Loading...</h1>

  return (
    /*
    ! ======================================================================
    ! This will not work. Only ONE element can be returned

    ! return (
      ! <h1>Hello from my app component as constant</h1>
      ! <p>Hello from a paragraph</p>
    !)

    ! Use fragments <></> to return two or more top level elements
    ! in JSX we DO NOT return functions as Array.map((obj) => {})
    ! but we do Array.map((obj) => ())
    ! ======================================================================
    */
    <>
      <div className="container">
        <h3>{title.toUpperCase()}</h3>
        <p>{body}</p>
        {showComments && commentBlock}
      </div>
    </>
  )
}

export default App
