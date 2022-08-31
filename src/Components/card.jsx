export const Card = ({img,title}) => {
  return (
    <div>
      
      <div class="card border-0 " style={{}}>
        <img
          src={img}
          class="card-img-top"
          alt="..." height={'205px'} style={{objectfit:'cover'}}
        />
      
      </div>
    </div>
  );
};
