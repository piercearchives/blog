const Post = () => {
  return (
    <>
    <section className="container">
      <div className="post">
        <div className="img-post"></div>
        <h5>Tecnologia</h5>
        <h3>o guia definitivo sobre o blog</h3>
        <p>lorem
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse modi alias rem velit rerum itaque qui consequatur. Illo, minus eveniet earum molestias totam molestiae? Rerum officia eveniet amet necessitatibus iste
        </p>

        <div className="flex pt-3">
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