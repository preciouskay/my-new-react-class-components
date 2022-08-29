export const Rows = () => {
  return (
    <div>
      <div className=" bg-light text-dark py-3 px-5 rounded opacity-75 ">
        <div className=" text-center">
          <i class="bi bi-check-circle display-6  "></i>
        </div>
        <div>
          <p className="text-dark ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
            iure ullam soluta magni fugit magnam corporis sunt ex incidunt
            provident fugiat consectetur.
          </p>
        </div>

        <div className="d-flex  justify-content-between ">
          <i class="bi bi-bookmark-plus text-primary fs-4 my-auto"></i>
          <div className="text-dark ">
            <p>
              10%
              <span className="  d-block text-danger">Bookmark</span>
            </p>
          </div>
        </div>
        <div className="d-flex  justify-content-between ">
          <i class="bi bi-telephone  fs-4 my-auto text-primary"></i>
          <div className="text-dark ">
            <p>
              20%
              <span className=" d-block text-danger">Fill-tags</span>
            </p>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-primary text-white border-0 px-3 py-2 rounded-pill">Click here</button>
        </div>
      </div>
    </div>
  );
};
