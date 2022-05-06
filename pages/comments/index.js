import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../src/components/Navbar";
import { useContext, useState } from "react";

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <diV>
        <Navbar />
      </diV>

      <div>
        <div className="row">
          <div className="mx-auto col-md-8">
            <h3 className="border-dotted text-primary">
              <i>Lorem Ipsun Post</i>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ipsum leo, tristique eu tristique non, volutpat id eros.
              Suspendisse finibus gravida dolor, sit amet faucibus dui tempus
              tincidunt. Etiam venenatis congue diam, a varius justo vehicula
              sit amet. Donec sed pulvinar libero. Etiam nisl dolor, gravida non
              dolor nec, dignissim efficitur mi. Integer nisl tortor, semper at
              orci at, iaculis molestie ante. Praesent a gravida est. Praesent
              non sapien molestie ex fermentum vestibulum. Cras molestie sem
              libero, et efficitur eros blandit vitae. Vestibulum vel bibendum
              risus, eu sodales justo. Nullam tempor sit amet tellus ac
              imperdiet. Donec eget tempus mi. Phasellus finibus purus aliquam
              cursus rhoncus. Praesent aliquet venenatis fringilla. Nam et quam
              at tortor volutpat accumsan ac eu neque. Integer sed felis
              hendrerit, lacinia sapien vel, aliquet ligula. Integer tincidunt
              diam magna, sit amet varius velit commodo et. Phasellus a metus
              eleifend, condimentum est quis, auctor augue. Quisque ut sem nisl.
              Proin viverra, diam ac rhoncus bibendum, lorem magna scelerisque
              metus, a posuere augue arcu et dolor. Quisque tincidunt magna in
              consequat aliquam. Nunc eu suscipit tortor. Aliquam erat volutpat.
              Donec massa mauris, suscipit bibendum gravida id, dapibus ac
              libero. Nulla pharetra velit eget erat semper condimentum. cursus
              rhoncus. Praesent aliquet venenatis fringilla. Nam et quam at
              tortor volutpat accumsan ac eu neque. Integer sed felis hendrerit,
              lacinia sapien vel, aliquet ligula. Integer tincidunt diam magna,
              sit amet varius velit commodo et. Phasellus a metus eleifend,
              condimentum est quis, auctor augue. Quisque ut sem nisl. Proin
              viverra, diam ac rhoncus bibendum, lorem magna scelerisque metus,
              a posuere augue arcu et dolor. Quisque tincidunt magna in
              consequat aliquam. Nunc eu suscipit tortor. Aliquam erat volutpat.
              Donec massa mauris, suscipit bibendum gravida id, dapibus ac
              libero. Nulla pharetra velit eget erat semper condimentum. cursus
              rhoncus. Praesent aliquet venenatis fringilla. Nam et quam at
              tortor volutpat accumsan ac eu neque. Integer sed felis hendrerit,
              lacinia sapien vel, aliquet ligula. Integer tincidunt diam magna,
              sit amet varius velit commodo et. Phasellus a metus eleifend,
              condimentum est quis, auctor augue. Quisque ut sem nisl. Proin
              viverra, diam ac rhoncus bibendum, lorem magna scelerisque metus,
              a posuere augue arcu et dolor. Quisque tincidunt magna in
              consequat aliquam. Nunc eu suscipit tortor. Aliquam erat volutpat.
              Donec massa mauris, suscipit bibendum gravida id, dapibus ac
              libero. Nulla pharetra velit eget erat semper condimentum.
            </p>
            <div className="mb-3">
              <input
                className="form-label"
                type="text"
                placeholder="your comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <br></br>
              <button onClick={submitComment} className="btn btn-primary">
                Submit Comments
              </button>
              - -
              <button onClick={fetchComments} className="btn btn-primary">
                Load Comments
              </button>
              {comments.map((comment) => {
                return (
                  <div key={comment.id}>
                    {comment.id}
                    {comment.text}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentsPage;
