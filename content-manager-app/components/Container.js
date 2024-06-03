const Container = ({children}) => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-8 is-offset-2">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Container