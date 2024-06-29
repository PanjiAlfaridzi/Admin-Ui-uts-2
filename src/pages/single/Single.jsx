import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Datatable from "../../components/datatable/Datatable";
import {useLocation } from "react-router-dom"

const Single = ({columns}) => {
  const location = useLocation();
  const id = location.pathname.split('/') [2];

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
            <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://media.licdn.com/dms/image/D5603AQFAsrNl_zcjag/profile-displayphoto-shrink_400_400/0/1713614299789?e=1720656000&v=beta&t=IgApHzyvSihU3HVX7aibbPfz_SEWvF0teswawxwmgHs"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Panji Alfaridzi</h1>
                <div className="detailItem">
                  <span className="itemKey">ID:</span>
                  <span className="itemValue">{id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">alfapanji@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} type="order" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Datatable columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default Single;