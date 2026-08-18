const Post = ({title, subtitle, children}) => {
  return (
    <>
    <section className="container">
      <div className="post mx-2">
        <div className="img-post"></div>
        <h5>{subtitle}</h5>
        <h3>{title}</h3>
        <p className="mt-1">
          {children}
        </p>

        <div className="flex pt-2">
          <div className="img-profile"></div>
          <div className="desc-profile ml-2"><h6 className="color-blue">Leonardo Swiley</h6>
          <p>Aug 2, 2020 - 8 min read</p></div>
          
        </div>
      </div>
    </section>
    </>
  )
}

export default Post;