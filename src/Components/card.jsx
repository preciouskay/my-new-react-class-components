export const Card = ({img,title}) => {
  return (
    <div>
      
      <div class="card border-0" style={{ width: "18rem" }}>
        <img
          src={img}
          class="card-img-top"
          alt="..." height={'300px'} style={{objectfit:'cover'}}
        />
        <div class="card-body">
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};
