import React from 'react'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Pie } from "react-chartjs-2";
const MainScreen = () => {
    const Data = [
      {
        id: 1,
        year: 2016,
        userGain: 80000,
        userLost: 823,
      },
      {
        id: 2,
        year: 2017,
        userGain: 45677,
        userLost: 345,
      },
      {
        id: 3,
        year: 2018,
        userGain: 78888,
        userLost: 555,
      },
      {
        id: 4,
        year: 2019,
        userGain: 90000,
        userLost: 4555,
      },
      {
        id: 5,
        year: 2020,
        userGain: 4300,
        userLost: 234,
      },
    ];
    const data = {
        labels: ['Red', 'Orange', 'Blue'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
              label: 'Popularity of colours',
              data: [55, 23, 96],
              // you can set indiviual colors for each bar
              backgroundColor: [
                'rgba(255, 255, 255, 0.6)',
                'rgba(255, 255, 255, 0.6)',
                'rgba(255, 255, 255, 0.6)'
              ],
              borderWidth: 1,
            }
        ]
}
const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  return (
    <section className="section">
      <div className="container-fluid">
        {/* ========== title-wrapper start ========== */}
        <div className="title-wrapper pt-30">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="title">
                <h2>Analytics Dashboard</h2>
              </div>
            </div>
            {/* end col */}
            <div className="col-md-6">
              <div className="breadcrumb-wrapper">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="analytics-dashboard.html#0">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Analytics
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* ========== title-wrapper end ========== */}
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="icon-card mb-30">
              <div className="icon purple">
                <i className="lni lni-users" />
              </div>
              <div className="content">
                <h6 className="mb-4">Users</h6>
                <h3 className="text-bold mb-3">6453</h3>
                <p className="text-sm text-success">
                  <i className="lni lni-arrow-up" /> +23.4%
                </p>
              </div>
            </div>
            {/* End Icon Cart */}
          </div>
          {/* End Col */}
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="icon-card mb-30">
              <div className="icon success">
                <i className="lni lni-eye" />
              </div>
              <div className="content">
                <h6 className="mb-4">Page views</h6>
                <h3 className="text-bold mb-3">876</h3>
                <p className="text-sm text-danger">
                  <i className="lni lni-arrow-down" /> -12.00%
                </p>
              </div>
            </div>
            {/* End Icon Cart */}
          </div>
          {/* End Col */}
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="icon-card mb-30">
              <div className="icon primary">
                <i className="lni lni-thumbs-up" />
              </div>
              <div className="content">
                <h6 className="mb-4">Impressions</h6>
                <h3 className="text-bold mb-3">976</h3>
                <p className="text-sm text-danger">
                  <i className="lni lni-arrow-down" /> -2.00%
                </p>
              </div>
            </div>
            {/* End Icon Cart */}
          </div>
          {/* End Col */}
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="icon-card mb-30">
              <div className="icon orange">
                <i className="lni lni-pie-chart" />
              </div>
              <div className="content">
                <h6 className="mb-4">Bounce Rate</h6>
                <h3 className="text-bold mb-3">346</h3>
                <p className="text-sm text-success">
                  <i className="lni lni-arrow-up" /> +23.4%
                </p>
              </div>
            </div>
            {/* End Icon Cart */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
        <div className="row">
          <div className="col-lg-5">
            <div className="card-style mb-30">
              <div className="title d-flex justify-content-between">
                <div className="left">
                  <h6 className="text-medium mb-2">Audience Overview</h6>
                </div>
              </div>
              {/* End Title */}
              <div className="chart">
                <div id="legend4">
                  <ul className="legend3 d-flex flex-wrap align-items-center mb-30">
                    <li>
                      <div className="d-flex">
                        <span className="bg-color primary-bg"> </span>
                        <div className="text">
                          <p className="text-sm text-success">
                            <span className="text-dark">New Visitor</span>
                            +25.55%
                            <i className="lni lni-arrow-up" />
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <span className="bg-color danger-bg" />
                        <div className="text">
                          <p className="text-sm text-success">
                            <span className="text-dark">Unique Visitor</span>
                            -2.05%
                            <i className="lni lni-arrow-up" />
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <Pie
                  data={chartData}
                  
                 
                />
              </div>
              {/* End Chart */}
            </div>
          </div>
          {/* End Col */}
          <div className="col-lg-7">
            <div className="card-style mb-30">
              <div className="title d-flex flex-wrap align-items-center justify-content-between">
                <div className="left">
                  <h6 className="text-medium mb-2">Web Traffic</h6>
                </div>
                <div className="right">
                  <div className="select-style-1 mb-2">
                    <div className="select-position select-sm">
                      <select className="light-bg">
                        <option value="">Last Month</option>
                        <option value="">Last 3 Months</option>
                        <option value="">Last Year</option>
                      </select>
                    </div>
                  </div>
                  {/* end select */}
                </div>
              </div>
              {/* End Title */}
              <div className="chart">
                <div id="legend3">
                  <ul className="legend3 d-flex align-items-center mb-30">
                    <li>
                      <div className="d-flex">
                        <span className="bg-color primary-bg"> </span>
                        <div className="text">
                          <p className="text-sm text-dark">Store Visits</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <span className="bg-color purple-bg" />
                        <div className="text">
                          <p className="text-sm text-dark">Visitors</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <canvas
                  id="Chart3"
                  style={{ width: "100%", height: 400, marginLeft: "-35px" }}
                />
              </div>
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
        <div className="row">
          <div className="col-lg-6">
            <div className="card-style mb-30">
              <div className="title d-flex justify-content-between align-items-center">
                <h6 className="mb-10">Revenue By Device</h6>
                <div className="more-btn-wrapper mb-10">
                  <button
                    className="more-btn dropdown-toggle"
                    id="moreAction"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="lni lni-more-alt" />
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="moreAction"
                  >
                    <li className="dropdown-item">
                      <a
                        href="analytics-dashboard.html#0"
                        className="text-gray"
                      >
                        Add All
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a
                        href="analytics-dashboard.html#0"
                        className="text-gray"
                      >
                        Remove All
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chart">
                <div
                  id="doughnutChart1"
                  style={{ width: "100%", height: 350 }}
                />
                <div className="doughnutChart-legend">
                  <ul>
                    <li className="primary">
                      <span className="left">Desktop</span>
                      <span className="right">49%</span>
                    </li>
                    <li className="orange">
                      <span className="left">Tablet</span>
                      <span className="right">19%</span>
                    </li>
                    <li className="danger">
                      <span className="left">Mobile</span>
                      <span className="right">30%</span>
                    </li>
                    <li className="warning">
                      <span className="left">Others</span>
                      <span className="right">5%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* end card */}
            <div className="card-style clients-table-card mb-30">
              <div className="title d-flex justify-content-between align-items-center">
                <h6 className="mb-10">New User</h6>
                <div className="more-btn-wrapper mb-10">
                  <button
                    className="more-btn dropdown-toggle"
                    id="moreAction"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="lni lni-more-alt" />
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="moreAction"
                  >
                    <li className="dropdown-item">
                      <a
                        href="analytics-dashboard.html#0"
                        className="text-gray"
                      >
                        Add All
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a
                        href="analytics-dashboard.html#0"
                        className="text-gray"
                      >
                        Remove All
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="table-wrapper table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <div className="employee-image">
                          <img src="assets/images/lead/lead-1.png" alt="" />
                        </div>
                      </td>
                      <td className="employee-info">
                        <h5 className="text-medium">Arlene McCoy</h5>
                        <p>6391 Elgin St. Celina, Delaware....</p>
                      </td>
                      <td>
                        <div className="d-flex justify-content-end">
                          <button className="status-btn close-btn border-0 m-1">
                            Cancel
                          </button>
                          <button className="status-btn primary-btn border-0 m-1">
                            Add
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* end table row */}
                    <tr>
                      <td>
                        <div className="employee-image">
                          <img src="assets/images/lead/lead-2.png" alt="" />
                        </div>
                      </td>
                      <td className="employee-info">
                        <h5 className="text-medium">Ralph Edwards</h5>
                        <p>2464 Royal Ln. Mesa, New Jersey,,,</p>
                      </td>
                      <td>
                        <div className="d-flex justify-content-end">
                          <button className="status-btn close-btn border-0 m-1">
                            Cancel
                          </button>
                          <button className="status-btn primary-btn border-0 m-1">
                            Add
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* end table row */}
                    <tr>
                      <td>
                        <div className="employee-image">
                          <img src="assets/images/lead/lead-3.png" alt="" />
                        </div>
                      </td>
                      <td className="employee-info">
                        <h5 className="text-medium">Dianne Russell</h5>
                        <p>4140 Parker Rd. Allentown, New,,,</p>
                      </td>
                      <td>
                        <div className="d-flex justify-content-end">
                          <button className="status-btn close-btn border-0 m-1">
                            Cancel
                          </button>
                          <button className="status-btn primary-btn border-0 m-1">
                            Add
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* end table row */}
                    <tr>
                      <td>
                        <div className="employee-image">
                          <img src="assets/images/lead/lead-4.png" alt="" />
                        </div>
                      </td>
                      <td className="employee-info">
                        <h5 className="text-medium">Jane Cooper</h5>
                        <p>1901 Thornridge Cir. Shiloh,,,</p>
                      </td>
                      <td>
                        <div className="d-flex justify-content-end">
                          <button className="status-btn close-btn border-0 m-1">
                            Cancel
                          </button>
                          <button className="status-btn primary-btn border-0 m-1">
                            Add
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* end table row */}
                    <tr>
                      <td>
                        <div className="employee-image">
                          <img src="assets/images/lead/lead-5.png" alt="" />
                        </div>
                      </td>
                      <td className="employee-info">
                        <h5 className="text-medium">Jane Cooper</h5>
                        <p>1901 Thornridge Cir. Shiloh,,,</p>
                      </td>
                      <td>
                        <div className="d-flex justify-content-end">
                          <button className="status-btn close-btn border-0 m-1">
                            Cancel
                          </button>
                          <button className="status-btn primary-btn border-0 m-1">
                            Add
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* end table row */}
                    <tr>
                      <td>
                        <div className="employee-image">
                          <img src="assets/images/lead/lead-6.png" alt="" />
                        </div>
                      </td>
                      <td className="employee-info">
                        <h5 className="text-medium">Brooklyn Simmons</h5>
                        <p>4517 Washington Ave. Manchester,,,</p>
                      </td>
                      <td>
                        <div className="d-flex justify-content-end">
                          <button className="status-btn close-btn border-0 m-1">
                            Cancel
                          </button>
                          <button className="status-btn primary-btn border-0 m-1">
                            Add
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* end table row */}
                    <tr>
                      <td>
                        <div className="employee-image">
                          <img src="assets/images/lead/lead-1.png" alt="" />
                        </div>
                      </td>
                      <td className="employee-info">
                        <h5 className="text-medium">Arlene McCoy</h5>
                        <p>6391 Elgin St. Celina, Delaware....</p>
                      </td>
                      <td>
                        <div className="d-flex justify-content-end">
                          <button className="status-btn close-btn border-0 m-1">
                            Cancel
                          </button>
                          <button className="status-btn primary-btn border-0 m-1">
                            Add
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* end table row */}
                    <tr>
                      <td>
                        <div className="employee-image">
                          <img src="assets/images/lead/lead-6.png" alt="" />
                        </div>
                      </td>
                      <td className="employee-info">
                        <h5 className="text-medium">Brooklyn Simmons</h5>
                        <p>4517 Washington Ave. Manchester,,,</p>
                      </td>
                      <td>
                        <div className="d-flex justify-content-end">
                          <button className="status-btn close-btn border-0 m-1">
                            Cancel
                          </button>
                          <button className="status-btn primary-btn border-0 m-1">
                            Add
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* end table row */}
                  </tbody>
                </table>
                {/* end table */}
              </div>
            </div>
            {/* end card */}
          </div>
          {/* End Col */}
          <div className="col-lg-6">
            <div className="card-style mb-30">
              <div className="title d-flex justify-content-between align-items-center">
                <h6 className="mb-10">Browser States</h6>
                <div className="more-btn-wrapper mb-10">
                  <button
                    className="more-btn dropdown-toggle"
                    id="moreAction"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="lni lni-more-alt" />
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="moreAction"
                  >
                    <li className="dropdown-item">
                      <a
                        href="analytics-dashboard.html#0"
                        className="text-gray"
                      >
                        Clear All
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a
                        href="analytics-dashboard.html#0"
                        className="text-gray"
                      >
                        Delete Cookies
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="map" style={{ width: "100%", height: 400 }} />
              <div className="table-wrapper">
                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        <h5 className="text-sm text-medium">Countries</h5>
                      </th>
                      <th>
                        <h5 className="text-sm text-medium">Orders</h5>
                      </th>
                      <th>
                        <h5 className="text-sm text-medium">Earnings</h5>
                      </th>
                    </tr>
                    {/* end table row */}
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p className="text-sm">United State</p>
                      </td>
                      <td>
                        <p className="text-sm">23,543</p>
                      </td>
                      <td>
                        <p className="text-sm">$35,4457</p>
                      </td>
                    </tr>
                    {/* end table row */}
                    <tr>
                      <td>
                        <p className="text-sm">United Kingdom</p>
                      </td>
                      <td>
                        <p className="text-sm">23,543</p>
                      </td>
                      <td>
                        <p className="text-sm">$35,4457</p>
                      </td>
                    </tr>
                    {/* end table row */}
                    <tr>
                      <td>
                        <p className="text-sm">Canada</p>
                      </td>
                      <td>
                        <p className="text-sm">23,543</p>
                      </td>
                      <td>
                        <p className="text-sm">$35,4457</p>
                      </td>
                    </tr>
                    {/* end table row */}
                    <tr>
                      <td>
                        <p className="text-sm">U A E</p>
                      </td>
                      <td>
                        <p className="text-sm">83,543</p>
                      </td>
                      <td>
                        <p className="text-sm">$95,4457</p>
                      </td>
                    </tr>
                    {/* end table row */}
                    <tr>
                      <td>
                        <p className="text-sm">Spain</p>
                      </td>
                      <td>
                        <p className="text-sm">3,543</p>
                      </td>
                      <td>
                        <p className="text-sm">$15,4457</p>
                      </td>
                    </tr>
                    {/* end table row */}
                    <tr>
                      <td>
                        <p className="text-sm">Germany</p>
                      </td>
                      <td>
                        <p className="text-sm">33,543</p>
                      </td>
                      <td>
                        <p className="text-sm">$45,4457</p>
                      </td>
                    </tr>
                    {/* end table row */}
                  </tbody>
                </table>
                {/* end table */}
              </div>
            </div>
            {/* End Card Style */}
            <div className="card-style clients-table-card mb-30">
              <div className="title d-flex justify-content-between align-items-center">
                <h6 className="mb-10">Browser States</h6>
                <div className="more-btn-wrapper mb-10">
                  <button
                    className="more-btn dropdown-toggle"
                    id="moreAction"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="lni lni-more-alt" />
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="moreAction"
                  >
                    <li className="dropdown-item">
                      <a
                        href="analytics-dashboard.html#0"
                        className="text-gray"
                      >
                        Clear All
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a
                        href="analytics-dashboard.html#0"
                        className="text-gray"
                      >
                        Delete Cookies
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="table-wrapper">
                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        <h5 className="text-sm text-medium">Browser</h5>
                      </th>
                      <th>
                        <h5 className="text-sm text-medium">Sessions</h5>
                      </th>
                      <th>
                        <h5 className="text-sm text-medium">Bounce Rate</h5>
                      </th>
                    </tr>
                    {/* end table row */}
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p className="text-sm">Chrome</p>
                      </td>
                      <td>
                        <p className="text-sm">10853(52%)</p>
                      </td>
                      <td>
                        <p className="text-sm">52.80%</p>
                      </td>
                    </tr>
                    {/* end table row */}
                    <tr>
                      <td>
                        <p className="text-sm">Safari</p>
                      </td>
                      <td>
                        <p className="text-sm">10853(52%)</p>
                      </td>
                      <td>
                        <p className="text-sm">52.80%</p>
                      </td>
                    </tr>
                    {/* end table row */}
                    <tr>
                      <td>
                        <p className="text-sm">FireFox</p>
                      </td>
                      <td>
                        <p className="text-sm">10853(52%)</p>
                      </td>
                      <td>
                        <p className="text-sm">52.80%</p>
                      </td>
                    </tr>
                    {/* end table row */}
                    <tr>
                      <td>
                        <p className="text-sm">Opera</p>
                      </td>
                      <td>
                        <p className="text-sm">10853(52%)</p>
                      </td>
                      <td>
                        <p className="text-sm">52.80%</p>
                      </td>
                    </tr>
                    {/* end table row */}
                  </tbody>
                </table>
                {/* end table */}
              </div>
            </div>
            {/* end card */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
        <div className="row">
          <div className="col-12">
            <div className="card-style referrals-table-card mb-30">
              <div className="title d-flex flex-wrap justify-content-between align-items-center">
                <h6 className="mb-10">Top Referrals</h6>
                <div className="right d-flex align-items-center justify-content-between justify-content-sm-end">
                  <div className="select-style-1 mb-2">
                    <div className="select-position select-sm">
                      <select className="light-bg">
                        <option value="">Last Month</option>
                        <option value="">Last 3 Months</option>
                        <option value="">Last Year</option>
                      </select>
                    </div>
                  </div>
                  {/* end select */}
                  <div className="more-btn-wrapper mb-2 ms-3">
                    <button
                      className="more-btn dropdown-toggle"
                      id="moreAction"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="lni lni-more-alt" />
                    </button>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="moreAction"
                    >
                      <li className="dropdown-item">
                        <a
                          href="analytics-dashboard.html#0"
                          className="text-gray"
                        >
                          Clear All
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a
                          href="analytics-dashboard.html#0"
                          className="text-gray"
                        >
                          Delete Cookies
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="table-wrapper table-responsive">
                <table className="table referrals-table">
                  <tbody>
                    <tr>
                      <td>
                        <h5 className="text-medium">#1</h5>
                      </td>
                      <td>
                        <div className="referrals-image d-flex align-items-center">
                          <div className="image me-3">
                            <img
                              src="assets/images/refarrals/uideck.svg"
                              alt=""
                            />
                          </div>
                          <h5 className="text-medium">UIdeck</h5>
                        </div>
                      </td>
                      <td>
                        <div className="text-center">
                          <h5 className="text-medium">7653</h5>
                          <p className="text-sm">Hit</p>
                        </div>
                      </td>
                      <td>
                        <div
                          className="chart"
                          style={{ width: 145, margin: "auto" }}
                        >
                          <canvas
                            id="referralsChart1"
                            style={{ width: "100%", height: 45 }}
                          />
                        </div>
                      </td>
                      <td>
                        <h5 className="text-medium d-flex align-items-center">
                          <span className="text-sm text-success me-2">
                            <i className="lni lni-arrow-up" />
                          </span>
                          12.45%
                        </h5>
                      </td>
                    </tr>
                    {/* end table row */}
                    <tr>
                      <td>
                        <h5 className="text-medium">#2</h5>
                      </td>
                      <td>
                        <div className="referrals-image d-flex align-items-center">
                          <div className="image me-3">
                            <img
                              src="assets/images/refarrals/graygrids.svg"
                              alt=""
                            />
                          </div>
                          <h5 className="text-medium">GrayGrids</h5>
                        </div>
                      </td>
                      <td>
                        <div className="text-center">
                          <h5 className="text-medium">7653</h5>
                          <p className="text-sm">Hit</p>
                        </div>
                      </td>
                      <td>
                        <div
                          className="chart"
                          style={{ width: 145, margin: "auto" }}
                        >
                          <canvas
                            id="referralsChart2"
                            style={{ width: "100%", height: 45 }}
                          />
                        </div>
                      </td>
                      <td>
                        <h5 className="text-medium d-flex align-items-center">
                          <span className="text-sm text-danger me-2">
                            <i className="lni lni-arrow-down" />
                          </span>
                          1.05%
                        </h5>
                      </td>
                    </tr>
                    {/* end table row */}
                    <tr>
                      <td>
                        <h5 className="text-medium">#3</h5>
                      </td>
                      <td>
                        <div className="referrals-image d-flex align-items-center">
                          <div className="image me-3">
                            <img
                              src="assets/images/refarrals/ayroui.svg"
                              alt=""
                            />
                          </div>
                          <h5 className="text-medium">Ayro UI</h5>
                        </div>
                      </td>
                      <td>
                        <div className="text-center">
                          <h5 className="text-medium">7653</h5>
                          <p className="text-sm">Hit</p>
                        </div>
                      </td>
                      <td>
                        <div
                          className="chart"
                          style={{ width: 145, margin: "auto" }}
                        >
                          <canvas
                            id="referralsChart3"
                            style={{ width: "100%", height: 45 }}
                          />
                        </div>
                      </td>
                      <td>
                        <h5 className="text-medium d-flex align-items-center">
                          <span className="text-sm text-success me-2">
                            <i className="lni lni-arrow-up" />
                          </span>
                          12.45%
                        </h5>
                      </td>
                    </tr>
                    {/* end table row */}
                    <tr>
                      <td>
                        <h5 className="text-medium">#4</h5>
                      </td>
                      <td>
                        <div className="referrals-image d-flex align-items-center">
                          <div className="image me-3">
                            <img
                              src="assets/images/refarrals/tailgrids.svg"
                              alt=""
                            />
                          </div>
                          <h5 className="text-medium">TailGrids</h5>
                        </div>
                      </td>
                      <td>
                        <div className="text-center">
                          <h5 className="text-medium">7653</h5>
                          <p className="text-sm">Hit</p>
                        </div>
                      </td>
                      <td>
                        <div
                          className="chart"
                          style={{ width: 145, margin: "auto" }}
                        >
                          <canvas
                            id="referralsChart4"
                            style={{
                              width: "100%",
                              height: 45,
                              marginLeft: "-35px",
                            }}
                          />
                        </div>
                      </td>
                      <td>
                        <h5 className="text-medium d-flex align-items-center">
                          <span className="text-sm text-danger me-2">
                            <i className="lni lni-arrow-down" />
                          </span>
                          2.04%
                        </h5>
                      </td>
                    </tr>
                    {/* end table row */}
                    <tr>
                      <td>
                        <h5 className="text-medium">#5</h5>
                      </td>
                      <td>
                        <div className="referrals-image d-flex align-items-center">
                          <div className="image me-3">
                            <img
                              src="assets/images/refarrals/ecomhtml.svg"
                              alt=""
                            />
                          </div>
                          <h5 className="text-medium">eCommerceHTML</h5>
                        </div>
                      </td>
                      <td>
                        <div className="text-center">
                          <h5 className="text-medium">7653</h5>
                          <p className="text-sm">Hit</p>
                        </div>
                      </td>
                      <td>
                        <div
                          className="chart"
                          style={{ width: 145, margin: "auto" }}
                        >
                          <canvas
                            id="referralsChart5"
                            style={{ width: "100%", height: 45 }}
                          />
                        </div>
                      </td>
                      <td>
                        <h5 className="text-medium d-flex align-items-center">
                          <span className="text-sm text-success me-2">
                            <i className="lni lni-arrow-up" />
                          </span>
                          12.45%
                        </h5>
                      </td>
                    </tr>
                    {/* end table row */}
                    <tr>
                      <td>
                        <h5 className="text-medium">#6</h5>
                      </td>
                      <td>
                        <div className="referrals-image d-flex align-items-center">
                          <div className="image me-3">
                            <img
                              src="assets/images/refarrals/lineicons.svg"
                              alt=""
                            />
                          </div>
                          <h5 className="text-medium">Lineicons</h5>
                        </div>
                      </td>
                      <td>
                        <div className="text-center">
                          <h5 className="text-medium">7653</h5>
                          <p className="text-sm">Hit</p>
                        </div>
                      </td>
                      <td>
                        <div
                          className="chart"
                          style={{ width: 145, margin: "auto" }}
                        >
                          <canvas
                            id="referralsChart6"
                            style={{ width: "100%", height: 45 }}
                          />
                        </div>
                      </td>
                      <td>
                        <h5 className="text-medium d-flex align-items-center">
                          <span className="text-sm text-success me-2">
                            <i className="lni lni-arrow-up" />
                          </span>
                          12.45%
                        </h5>
                      </td>
                    </tr>
                    {/* end table row */}
                  </tbody>
                </table>
                {/* end table */}
              </div>
            </div>
            {/* end card */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
      {/* end container */}
    </section>
  );
}

export default MainScreen
