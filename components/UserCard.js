import Image from "next/image";
import { useState, useEffect } from "react";

export default function Card({ data, key, putItemToSell, isCreatorDashboard }) {
  const [input, setInput] = useState(0);
  const [enable, setEnable] = useState(false);
  useEffect(() => {
    if (input > 0) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [input]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div key={key} className=" mb-5 col-md-4">
      <div style={{ borderRadius: "10px" }} className="card shadow margin-56">
        <Image
          className="card-img-top display-image-card"
          src={data.image}
          alt="Card image cap"
          width={200}
          height={250}
          objectFit="contain"
        />
        <div className="card-body">
          <h5 className="card-title" id="namepr{{i.id}}" style={{fontWeight: "bold"}}>
            {data.name}
          </h5>
          <h5 style={{ fontSize: "12pt" }}>
            Category: {data.category}
          </h5>
          <h5 className="card-title">
            {data.price} <b>ETH</b>
          </h5>
          {isCreatorDashboard ? (<>
            <div className="col-6">
              <button className="commonbuttons deletebuttons"
                
                id="qv{{i.id}}"
              >
                Delete
              </button>
            </div>
          </>) : null }

          {!isCreatorDashboard ? (
            <>
              {/* <div className="row m-1">
                <label htmlFor="resaleinput">Enter the Resale Value</label>
              </div> */}
              {/* <div className="row">
                <div className="col-6">
                  <input
                    id="resaleinput"
                    onChange={handleChange}
                    value={input}
                    placeholder="Enter resale price"
                    type="number"
                  />
                </div>
                <div className="col-6">
                  {enable && (
                    <button
                      onClick={() => putItemToSell(data, input)}
                      id="qv{{i.id}}"
                      className="commonbuttons"
                    >
                      Sell
                    </button>
                  )}
                </div>
              </div> */}
            </>
          ) : null}
          <br />
          <p className="card-text">{data.desc}</p>
        </div>
      </div>
    </div>
  );
}
