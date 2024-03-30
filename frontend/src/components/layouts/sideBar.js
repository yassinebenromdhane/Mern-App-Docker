import React from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div id="body">
      <>
        {/* ======== Preloader =========== */}
        {/* <div id="preloader">
          <div className="spinner" />
        </div> */}
        {/* ======== Preloader =========== */}
        {/* ======== sidebar-nav start =========== */}
        <aside className="sidebar-nav-wrapper">
          <div className="navbar-logo">
            <svg
              width="175"
              height="100"
              viewBox="0 0 370 98.88707758054444"
              class="css-1j8o68f"
            >
              <defs id="SvgjsDefs2653"></defs>
              <g
                id="SvgjsG2654"
                featurekey="symbolFeature-0"
                transform="matrix(1.1764707994296444,0,0,1.1764707994296444,-8.823840659438309,-9.38045838397906)"
                fill="#365cf5"
              >
                <g xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.191,64.081c-0.457-2.148-2.669-3.127-4.646-3.37   c-1.792-0.22-3.938,0.386-5.043,1.896c-0.294,0.4-0.465,0.861-0.537,1.351c-0.271,1.859,0.899,4.141,2.249,5.207   c1.526,1.206,3.472,1.123,5.199,0.375C17.438,68.661,18.649,66.237,18.191,64.081z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M32.656,75.482c-1,0.502-1.813,2.121-2.089,3.056   c-0.498,1.688,0.226,4.295,2.042,4.942c1.974,0.704,3.031-0.823,3.191-2.625c0.141-1.588-0.346-3.84-1.5-5.017   C33.734,75.262,33.17,75.225,32.656,75.482z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M72.916,56.606c1.375-0.135,2.863-0.534,4.143-1.048   c0.873-0.351,1.708-0.831,2.466-1.416c3.335-2.573,4.927-7.45,1.92-10.949c-1.118-1.301-3.084-2.275-4.751-2.538   c-3.254-0.511-6.531,0.706-9.802,0.17c-1.361-0.223-2.903-0.758-3.566-2.074c-0.858-1.703,0.171-3.95,0.642-5.63   c1.216-4.34,0.006-8.263-3.918-10.631c-2.764-1.668-6.762-1.708-9.852-1.127c-2.273,0.426-3.803,1.764-4.997,3.679   c-0.989,1.584-1.712,4.344-3.919,4.565c-1.573,0.158-2.906-0.97-4.213-1.66c-1.454-0.767-3.096-1.057-4.691-0.509   c-3.371,1.158-2.977,4.674-2.995,7.552c-0.009,1.428-0.147,3.465-2,3.541c-1.917,0.079-3.642-1.746-5.051-2.806   c-2.071-1.558-4.613-1.794-7.099-1.063c-3.085,0.907-4.437,4.168-4.186,7.175c0.281,3.363,2.483,5.812,4.962,7.88   c1.973,1.646,4.456,3.026,5.993,5.133c1.302,1.786,0.898,4.247,0.786,6.308c-0.099,1.822,0.01,3.771,0.805,5.445   c0.628,1.322,1.93,2.559,3.177,3.282c5.294,3.072,13.469,2.817,18.503-0.613c1.917-1.308,3.862-2.942,6.286-1.905   c1.649,0.705,2.846,2.075,4.186,3.213c1.41,1.198,3.048,2.022,4.899,2.27c2.035,0.272,4.332-0.166,5.97-1.444   c1.659-1.295,2.284-3.519,1.569-5.493c-0.722-1.991-3.235-3.15-3.257-5.479C64.891,56.821,70.497,56.845,72.916,56.606z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.437,53.877c1.257,0.604,4.583,0.579,3.375-1.709   c-0.01-0.019-0.02-0.036-0.03-0.055c-0.517-0.923-1.599-1.69-2.668-1.439c-0.88,0.207-1.69,0.948-1.608,1.928   C7.557,53.208,7.907,53.622,8.437,53.877z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M77.506,33.747c2.459-1.808,0.601-4.836-2.078-4.472   c-2.096,0.285-3.688,2.148-2.08,4.042C74.613,34.807,76.344,34.603,77.506,33.747z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M37.056,21.654c0.011-0.002,0.021-0.004,0.032-0.006   c1.839-0.374,1.005-3.11-0.419-3.422C34.617,17.777,34.407,22.146,37.056,21.654z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.403,75.72c-1.313-0.035-2.741,0.476-3.647,1.126   c-2.852,2.046-4.66,5.79-4.825,9.263c-0.115,2.427,1.228,5.193,3.758,5.809c3.235,0.787,5.712-2.845,6.743-5.381   c1.182-2.907,2.654-6.988,0.364-9.775C26.207,76.044,25.333,75.745,24.403,75.72z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M48.22,73.479c-0.109-0.063-0.22-0.114-0.329-0.151   c-1.237-0.423-2.372,0.819-2.551,2.034c-0.267,1.802,2.384,3.751,3.688,1.981C49.795,76.302,49.289,74.103,48.22,73.479z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M92.184,66.836c-0.476-1.306-1.634-2.184-2.818-2.816   c-3.161-1.691-7.611-2.771-11.164-1.882c-2.091,0.522-3.814,2.128-2.901,4.334c1.331,3.217,5.354,5.739,8.504,6.854   c2.525,0.894,5.547,0.597,7.494-1.391c0.533-0.545,0.883-1.253,1.061-2.013C92.598,68.901,92.529,67.784,92.184,66.836z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.675,23.142c1.938,1.319,4.115,0.608,4.753-1.677   c0.315-1.13,0.38-2.343,0.283-3.569c-0.162-2.063-0.78-4.163-1.427-5.97c-0.946-2.645-3.546-4.415-6.393-3.846   c-1.287,0.257-2.167,1.24-2.587,2.446c-0.858,2.455,0.06,5.042,1.195,7.238C23.539,19.771,24.769,21.844,26.675,23.142z"
                  ></path>
                </g>
              </g>
              <g
                id="SvgjsG2655"
                featurekey="nameFeature-0"
                transform="matrix(2.0057955542932278,0,0,2.0057955542932278,115.96675466022431,-11.857375222352672)"
                fill="#365cf5"
              >
                <path d="M7.44 32.76 c0 -1.4 -0.2 -5.2 -0.16 -6 c0 -0.12 0.08 -0.28 0.12 -0.28 c0.08 0 0.24 0.08 0.28 0.12 c1.28 1.68 7.28 13.32 8 13.36 c0.2 0.04 0.4 0.04 0.6 0.04 c1.36 -0.08 2.56 0 3.92 0 c1.4 0 0.48 -1.36 0.24 -1.72 c-0.36 -0.52 -5.12 -9.04 -5.4 -9.56 c-0.8 -1.36 -1.48 -2.84 -2.28 -4.16 c-0.08 -0.16 -0.16 -0.4 -0.12 -0.56 c0.08 -0.48 0.2 -0.92 0.4 -1.36 c0.96 -1.88 1.96 -3.8 3.12 -5.6 c1.28 -2.04 2 -3.32 3.04 -5.16 c0.24 -0.44 0.4 -0.92 0.56 -1.44 c0.04 -0.2 -0.12 -0.4 -0.36 -0.4 c-0.76 -0.04 -3.52 0 -4.4 0 c-0.4 0 -0.8 0.08 -1 0.44 c-0.52 1 -5.88 10.8 -6.4 11.68 c-0.04 0.08 -0.16 0.12 -0.28 0.12 c0 0 -0.08 -0.12 -0.08 -0.2 c-0.04 -2.24 0.36 -9.56 0.28 -11.04 c-0.04 -0.88 -0.2 -0.96 -1.08 -1 c-0.96 -0.04 -2.28 -0.04 -3.24 -0.04 c-0.88 0 -0.96 0.48 -1.08 1.12 c-0.04 0.12 -0.04 3.88 -0.04 5.56 c0 2.44 -0.2 17.72 0.08 22.56 c0 0.48 0.12 0.76 0.52 0.76 c1.08 -0.08 2.68 0 3.76 0 c0.76 0 0.88 -0.08 0.88 -1.36 c0 -1.72 0.16 -3.28 0.16 -5.4 c0 -0.16 -0.04 -0.32 -0.04 -0.48 z M30.662000000000003 37 c0 -1.04 0 -7.6 0.04 -8.12 c0.04 -0.12 0.12 -0.36 0.28 -0.36 s0.24 0.08 0.28 0.2 c1.6 3.12 3 6.24 4.44 9.28 c0.2 0.44 0.64 1.72 0.76 1.84 c0.16 0.24 0.44 0.16 0.68 0.16 l4.4 0.04 c0.52 0 0.64 -0.32 0.52 -0.76 c-0.32 -1.2 -2.6 -5.44 -3.12 -6.48 c-0.36 -0.8 -2.76 -5.44 -2.84 -5.8 c-0.08 -0.16 0.52 -0.44 0.6 -0.56 c1.92 -1.72 3.64 -3.48 4 -6.16 c0.4 -2.64 -0.2 -5.52 -1.92 -7.64 c-1.32 -1.56 -3.04 -2.48 -5.08 -2.6 c-1.24 -0.08 -2.44 0.04 -3.68 0 c-1.08 -0.04 -1.84 -0.04 -3.2 -0.04 c-0.64 0 -1.04 0.36 -1.08 1.04 l0 0.48 c-0.08 3.08 0 6.16 0.04 9.2 c0 4.64 -0.08 16.88 -0.08 18.64 c0 0.52 0.08 0.64 0.56 0.64 c0.28 0 0.6 0.04 0.88 0.04 c1.12 0 1.8 -0.04 2.96 -0.04 c0.88 0 0.56 -1.44 0.56 -3 z M30.662000000000003 21.4 l0.04 -4.04 c0.04 -0.6 -0.16 -1.8 0.4 -2.24 c0.76 -0.56 2.32 0 3 0.48 c2 1.36 1.84 4.72 0.76 6.6 c-0.52 0.88 -1.4 1.4 -2.4 1.68 c-0.6 0.16 -1.72 0.36 -1.76 -0.6 c0 -0.64 -0.04 -1.88 -0.04 -1.88 z M67.924 17.36 c0.84 2.48 1.04 5.16 1.04 7.8 c0 2.2 -0.4 4.32 -0.96 6.44 c-0.72 2.52 -1.92 4.8 -4.08 6.28 c-1.6 1.16 -3.28 1.92 -5.24 2.12 c-0.28 0 -0.52 0.04 -0.8 0.04 c-0.24 0 -0.48 -0.04 -0.76 -0.04 c-1.96 -0.2 -3.64 -0.96 -5.28 -2.12 c-2.12 -1.48 -3.36 -3.76 -4.04 -6.28 c-0.6 -2.12 -0.96 -4.24 -0.96 -6.44 c0 -2.64 0.2 -5.32 1.04 -7.8 c1.48 -4.28 5.56 -7.32 10 -7.4 c4.44 0.08 8.52 3.12 10.04 7.4 z M64.04400000000001 28.08 c0.4 -2.44 0.24 -4.92 -0.24 -7.36 c-0.48 -2.2 -1.44 -4.36 -3.28 -5.68 c-0.32 -0.24 -0.68 -0.44 -1.04 -0.56 c-0.52 -0.24 -1.08 -0.32 -1.6 -0.32 s-1.04 0.08 -1.56 0.32 c-0.4 0.12 -0.72 0.32 -1.04 0.56 c-1.88 1.32 -2.84 3.48 -3.28 5.68 c-0.48 2.44 -0.64 4.92 -0.24 7.36 c0.4 2.2 1.2 5.16 3.28 6.28 c0.88 0.48 1.84 0.8 2.84 0.84 c1 -0.04 2 -0.36 2.88 -0.84 c2.08 -1.12 2.88 -4.08 3.28 -6.28 z M75.34600000000002 9.96 c-0.04 0 -0.36 -0.04 -0.68 -0.04 c-0.56 0 -0.84 0.2 -0.92 0.72 c-0.04 0.28 -0.04 0.6 0.04 0.84 c0.32 1.24 6.52 26.88 6.84 28 c0.12 0.48 0.16 0.48 0.64 0.48 l3.24 0 l0.24 0 c0.52 0 0.56 -0.72 0.68 -1.4 c0.8 -4.12 1.8 -8.2 2.76 -12.16 c0.04 -0.24 0.12 -0.48 0.2 -0.68 c0.04 -0.08 0.12 -0.12 0.16 -0.12 c0.08 0 0.16 0.04 0.2 0.12 c0.2 0.48 2.6 11.84 3.08 13.8 c0.08 0.24 0.2 0.44 0.52 0.44 l3.2 0 c0.6 0 1 -0.32 1.12 -0.92 c0.52 -2.64 1.2 -5.6 1.84 -8.2 c0.8 -3.2 1.64 -6.36 2.48 -9.56 c0.64 -2.56 1.32 -5.36 2.12 -7.88 c0.28 -0.84 1.32 -3.36 -0.44 -3.36 c-0.88 0 -1.64 -0.08 -2.52 -0.04 c-0.28 0 -0.56 0 -0.84 0.04 c-0.44 0 -0.76 0.24 -0.92 0.64 c-0.12 0.4 -0.32 0.84 -0.44 1.24 c-0.6 2.56 -1.16 5.48 -1.88 8 c-0.52 1.88 -1.08 3.72 -1.52 5.6 c0 0.04 -0.16 0.64 -0.32 0.64 c-0.28 0 -0.36 -0.44 -0.44 -0.84 c-0.04 -0.16 -2.04 -11.64 -2.32 -13.88 c-0.08 -0.88 -0.36 -1.4 -1.28 -1.44 l-0.48 0 c-1.04 0.08 -1.6 -0.04 -2.64 0.04 c-0.84 0.04 -0.96 0.12 -1.16 0.88 c-0.04 0.16 -0.04 0.36 -0.08 0.56 c-0.32 1.76 -2.4 13.12 -2.68 14.48 c0 0.08 -0.04 0.24 -0.16 0.24 c-0.16 0 -0.2 -0.2 -0.24 -0.28 c-0.04 -0.16 -3.52 -14.84 -3.64 -15.2 c-0.16 -0.48 -0.52 -0.76 -1.08 -0.76 c-0.88 0.04 -1.56 0 -2.68 0 z M125.24800000000002 32.64 c0.24 -0.52 0.44 -1.04 0.64 -1.56 c0.44 -1.28 0.52 -2.6 0.64 -3.92 c0.24 -2.8 0.16 -5.64 -0.56 -8.36 c-0.88 -3.48 -3.12 -6.68 -6.48 -8.16 c-1.52 -0.68 -3.24 -0.76 -4.88 -0.72 c-1.72 0 -3.48 -0.08 -5.2 0.08 c-0.48 0.04 -0.72 0.28 -0.8 0.72 c-0.08 0.48 -0.16 0.96 -0.16 1.4 c0.08 2.44 0 9.68 0.08 10.88 c0.04 1.08 -0.08 2.4 -0.08 3.48 c0.04 2.68 0 5.4 0 8.08 c0 1.12 -0.04 2.2 -0.04 3.32 c0 1.2 -0.44 1.72 2.84 1.72 c2.92 0 5.96 -0.24 8.72 -1.28 c2.56 -0.92 4.16 -3.28 5.28 -5.68 z M113.60800000000002 28.48 l0 -4.8 c0 -3.04 0.08 -5 -0.04 -7.56 l0 -0.48 c0.04 -0.84 0.16 -0.88 1.04 -0.88 c1.16 -0.04 2 0.24 3 0.64 s1.56 1.28 2.08 2.12 c1 1.64 1.4 3.44 1.48 5.32 c0.04 1.08 0.08 2.16 0.08 3.24 c0 5.12 -3 8.68 -5.64 8.68 c-1.76 0 -2.04 0.12 -2.04 -1.04 c0 -1.2 0.08 -2.4 0.08 -3.6 c-0.04 -0.52 -0.04 -1.08 -0.04 -1.64 z"></path>
              </g>
              <g
                id="SvgjsG2656"
                featurekey="sloganFeature-0"
                transform="matrix(0.8755848165341452,0,0,0.8755848165341452,119.12158748329621,73.78939318362244)"
                fill="#365cf5"
              >
                <path d="M8.9 7.359999999999999 c0.02 -0.66 0 -1.2 0 -1.84 c0 -0.74 -1.34 -0.66 -1.82 -0.64 c-2.14 0.14 -4.18 1.5 -5.16 3.36 c-0.28 0.54 -0.48 1.1 -0.62 1.68 c-0.34 1.36 -0.36 2.8 -0.2 4.18 c0.14 1.3 0.48 2.6 1.28 3.64 c1.38 1.82 3.92 2.46 6.1 2.12 c0.1 -0.02 0.2 -0.04 0.28 -0.1 c0.06 -0.04 0.12 -0.12 0.12 -0.2 l0.06 -1.14 c0.02 -0.36 0 -0.34 0 -0.7 c0 -0.48 -1 -0.12 -1.62 -0.12 c-0.6 0 -1.24 -0.02 -1.78 -0.3 c-0.96 -0.54 -1.5 -1.62 -1.8 -2.64 c-0.34 -1.1 -0.42 -2.28 -0.22 -3.4 c0.24 -1.46 0.94 -3.14 2.48 -3.64 c0.88 -0.3 1.82 -0.2 2.7 -0.1 c0.12 0.02 0.2 -0.06 0.2 -0.16 z M22.695 18.5 c0 -0.52 0 -3.8 0.02 -4.06 c0.02 -0.06 0.06 -0.18 0.14 -0.18 s0.12 0.04 0.14 0.1 c0.8 1.56 1.5 3.12 2.22 4.64 c0.1 0.22 0.32 0.86 0.38 0.92 c0.08 0.12 0.22 0.08 0.34 0.08 l2.2 0.02 c0.26 0 0.32 -0.16 0.26 -0.38 c-0.16 -0.6 -1.3 -2.72 -1.56 -3.24 c-0.18 -0.4 -1.38 -2.72 -1.42 -2.9 c-0.04 -0.08 0.26 -0.22 0.3 -0.28 c0.96 -0.86 1.82 -1.74 2 -3.08 c0.2 -1.32 -0.1 -2.76 -0.96 -3.82 c-0.66 -0.78 -1.52 -1.24 -2.54 -1.3 c-0.62 -0.04 -1.22 0.02 -1.84 0 c-0.54 -0.02 -0.92 -0.02 -1.6 -0.02 c-0.32 0 -0.52 0.18 -0.54 0.52 l0 0.24 c-0.04 1.54 0 3.08 0.02 4.6 c0 2.32 -0.04 8.44 -0.04 9.32 c0 0.26 0.04 0.32 0.28 0.32 c0.14 0 0.3 0.02 0.44 0.02 c0.56 0 0.9 -0.02 1.48 -0.02 c0.44 0 0.28 -0.72 0.28 -1.5 z M22.695 10.7 l0.02 -2.02 c0.02 -0.3 -0.08 -0.9 0.2 -1.12 c0.38 -0.28 1.16 0 1.5 0.24 c1 0.68 0.92 2.36 0.38 3.3 c-0.26 0.44 -0.7 0.7 -1.2 0.84 c-0.3 0.08 -0.86 0.18 -0.88 -0.3 c0 -0.32 -0.02 -0.94 -0.02 -0.94 z M50.23 8.68 c0.42 1.24 0.52 2.58 0.52 3.9 c0 1.1 -0.2 2.16 -0.48 3.22 c-0.36 1.26 -0.96 2.4 -2.04 3.14 c-0.8 0.58 -1.64 0.96 -2.62 1.06 c-0.14 0 -0.26 0.02 -0.4 0.02 c-0.12 0 -0.24 -0.02 -0.38 -0.02 c-0.98 -0.1 -1.82 -0.48 -2.64 -1.06 c-1.06 -0.74 -1.68 -1.88 -2.02 -3.14 c-0.3 -1.06 -0.48 -2.12 -0.48 -3.22 c0 -1.32 0.1 -2.66 0.52 -3.9 c0.74 -2.14 2.78 -3.66 5 -3.7 c2.22 0.04 4.26 1.56 5.02 3.7 z M48.29 14.04 c0.2 -1.22 0.12 -2.46 -0.12 -3.68 c-0.24 -1.1 -0.72 -2.18 -1.64 -2.84 c-0.16 -0.12 -0.34 -0.22 -0.52 -0.28 c-0.26 -0.12 -0.54 -0.16 -0.8 -0.16 s-0.52 0.04 -0.78 0.16 c-0.2 0.06 -0.36 0.16 -0.52 0.28 c-0.94 0.66 -1.42 1.74 -1.64 2.84 c-0.24 1.22 -0.32 2.46 -0.12 3.68 c0.2 1.1 0.6 2.58 1.64 3.14 c0.44 0.24 0.92 0.4 1.42 0.42 c0.5 -0.02 1 -0.18 1.44 -0.42 c1.04 -0.56 1.44 -2.04 1.64 -3.14 z M62.845 4.98 c-0.02 0 -0.18 -0.02 -0.34 -0.02 c-0.28 0 -0.42 0.1 -0.46 0.36 c-0.02 0.14 -0.02 0.3 0.02 0.42 c0.16 0.62 3.26 13.44 3.42 14 c0.06 0.24 0.08 0.24 0.32 0.24 l1.62 0 l0.12 0 c0.26 0 0.28 -0.36 0.34 -0.7 c0.4 -2.06 0.9 -4.1 1.38 -6.08 c0.02 -0.12 0.06 -0.24 0.1 -0.34 c0.02 -0.04 0.06 -0.06 0.08 -0.06 c0.04 0 0.08 0.02 0.1 0.06 c0.1 0.24 1.3 5.92 1.54 6.9 c0.04 0.12 0.1 0.22 0.26 0.22 l1.6 0 c0.3 0 0.5 -0.16 0.56 -0.46 c0.26 -1.32 0.6 -2.8 0.92 -4.1 c0.4 -1.6 0.82 -3.18 1.24 -4.78 c0.32 -1.28 0.66 -2.68 1.06 -3.94 c0.14 -0.42 0.66 -1.68 -0.22 -1.68 c-0.44 0 -0.82 -0.04 -1.26 -0.02 c-0.14 0 -0.28 0 -0.42 0.02 c-0.22 0 -0.38 0.12 -0.46 0.32 c-0.06 0.2 -0.16 0.42 -0.22 0.62 c-0.3 1.28 -0.58 2.74 -0.94 4 c-0.26 0.94 -0.54 1.86 -0.76 2.8 c0 0.02 -0.08 0.32 -0.16 0.32 c-0.14 0 -0.18 -0.22 -0.22 -0.42 c-0.02 -0.08 -1.02 -5.82 -1.16 -6.94 c-0.04 -0.44 -0.18 -0.7 -0.64 -0.72 l-0.24 0 c-0.52 0.04 -0.8 -0.02 -1.32 0.02 c-0.42 0.02 -0.48 0.06 -0.58 0.44 c-0.02 0.08 -0.02 0.18 -0.04 0.28 c-0.16 0.88 -1.2 6.56 -1.34 7.24 c0 0.04 -0.02 0.12 -0.08 0.12 c-0.08 0 -0.1 -0.1 -0.12 -0.14 c-0.02 -0.08 -1.76 -7.42 -1.82 -7.6 c-0.08 -0.24 -0.26 -0.38 -0.54 -0.38 c-0.44 0.02 -0.78 0 -1.34 0 z M96.7 16.32 c0.12 -0.26 0.22 -0.52 0.32 -0.78 c0.22 -0.64 0.26 -1.3 0.32 -1.96 c0.12 -1.4 0.08 -2.82 -0.28 -4.18 c-0.44 -1.74 -1.56 -3.34 -3.24 -4.08 c-0.76 -0.34 -1.62 -0.38 -2.44 -0.36 c-0.86 0 -1.74 -0.04 -2.6 0.04 c-0.24 0.02 -0.36 0.14 -0.4 0.36 c-0.04 0.24 -0.08 0.48 -0.08 0.7 c0.04 1.22 0 4.84 0.04 5.44 c0.02 0.54 -0.04 1.2 -0.04 1.74 c0.02 1.34 0 2.7 0 4.04 c0 0.56 -0.02 1.1 -0.02 1.66 c0 0.6 -0.22 0.86 1.42 0.86 c1.46 0 2.98 -0.12 4.36 -0.64 c1.28 -0.46 2.08 -1.64 2.64 -2.84 z M90.88 14.24 l0 -2.4 c0 -1.52 0.04 -2.5 -0.02 -3.78 l0 -0.24 c0.02 -0.42 0.08 -0.44 0.52 -0.44 c0.58 -0.02 1 0.12 1.5 0.32 s0.78 0.64 1.04 1.06 c0.5 0.82 0.7 1.72 0.74 2.66 c0.02 0.54 0.04 1.08 0.04 1.62 c0 2.56 -1.5 4.34 -2.82 4.34 c-0.88 0 -1.02 0.06 -1.02 -0.52 c0 -0.6 0.04 -1.2 0.04 -1.8 c-0.02 -0.26 -0.02 -0.54 -0.02 -0.82 z M108.69500000000001 15.9 l-0.02 0 c0 0.5 -0.02 1.02 0 1.54 c0.02 0.64 0.04 1.28 0.08 1.92 c0.02 0.22 0.06 0.28 0.28 0.32 c0.4 0.1 0.82 0.12 1.24 0.12 c1.08 -0.04 1.08 -0.22 1.08 -0.96 c-0.04 -0.38 -0.02 -0.54 -0.02 -1 c0 -0.66 -0.02 -0.74 -0.02 -1.68 c0.02 -0.76 0.02 -1.74 0.02 -2.52 c0 -0.42 0.06 -0.56 0.44 -0.56 l2.92 0 c0.42 0.06 0.26 -0.22 0.26 -0.64 s0.06 -0.44 0.04 -0.86 c0 -0.2 -0.04 -0.4 -0.06 -0.6 c-0.04 -0.34 -0.16 -0.46 -0.5 -0.46 c-0.22 0 -0.02 0.02 -0.22 0.04 c-0.86 0.06 -1.68 -0.06 -2.54 0 c-0.28 0 -0.32 -0.04 -0.34 -0.3 c-0.06 -0.78 0 -1.64 0.08 -2.42 c0.04 -0.32 0.1 -0.38 0.4 -0.4 l2.82 -0.02 c0.4 -0.04 0.52 -0.02 0.48 -0.4 c-0.04 -0.58 0.04 -1.18 -0.04 -1.76 c-0.04 -0.32 -0.12 -0.38 -0.48 -0.38 c-0.6 0.02 -0.74 0.02 -1.34 0.06 c-0.6 0.02 -3.02 0.02 -3.6 0.02 c-0.82 0 -0.9 -0.06 -0.92 0.96 c-0.02 0.8 -0.02 1.62 -0.02 2.44 c0 1.4 -0.08 6.42 -0.02 7.54 z M126.39000000000001 8.28 c0 2.02 0.02 4.06 0.06 6.06 c0.02 1.22 0 2.6 0.58 3.72 c0.74 1.44 2.38 2.08 3.96 1.98 c1.08 -0.08 2.08 -0.36 2.86 -1.16 c1.32 -1.42 1.06 -3.64 1.08 -5.46 c0.04 -2.62 0.1 -5.06 0.1 -7.7 c0 -0.44 -0.14 -0.68 -0.58 -0.7 c-0.54 -0.02 -1.08 0 -1.62 0.04 c-0.22 0 -0.4 0.2 -0.4 0.44 c0.02 1.92 0.06 3.86 0.04 5.8 c-0.02 1.66 0.2 3.5 -0.42 5.08 c-0.24 0.58 -0.78 1.02 -1.42 1.02 c-1.6 -0.04 -1.54 -1.94 -1.6 -3.06 c-0.12 -2.44 0.06 -4.94 0.12 -7.38 c0 -0.46 0 -0.92 0.02 -1.38 c0.02 -0.24 0.06 -0.54 -0.26 -0.56 l-0.36 0 c-0.5 0.04 -1 -0.02 -1.5 0 c-0.48 0.04 -0.64 0.18 -0.64 0.66 c0 0.86 -0.02 1.74 -0.02 2.6 z M154.82500000000002 5.460000000000001 c0.06 0.28 0.02 13.6 0.02 13.94 c0 0.6 -0.22 0.58 -0.62 0.58 c-0.6 0 -1.44 0.1 -1.62 -0.1 c-0.16 -0.14 -3.12 -7.28 -3.54 -8.18 c-0.04 -0.08 -0.14 -0.28 -0.22 -0.24 c-0.1 0.04 -0.06 0.18 -0.06 0.26 c-0.02 0.7 0.1 6.74 0.1 7.7 c0 0.48 -0.02 0.56 -0.42 0.56 l-1 0 c-0.26 0 -0.58 -0.02 -0.84 0.02 c-0.2 0 -0.3 -0.06 -0.32 -0.26 l0 -1.58 c0.04 -1.68 0 -11.64 0 -12.38 c0 -0.64 0.18 -0.76 0.82 -0.76 c0.44 -0.02 0.88 -0.02 1.32 -0.02 c0.14 0 0.22 0.02 0.3 0.2 c0.54 1.26 2.84 7.04 3.2 7.74 c0.06 0.14 0.28 0.7 0.4 0.76 l0.02 0 c0.08 -0.08 0.06 -0.48 0.06 -0.6 c0 -0.3 -0.16 -7.32 -0.16 -7.46 c0 -0.2 -0.06 -0.38 0.04 -0.52 c0.06 -0.08 0.32 -0.1 0.42 -0.12 c0.56 -0.04 1.22 0.02 1.78 0 c0.28 0 0.26 0.2 0.32 0.46 z M174.56 16.32 c0.12 -0.26 0.22 -0.52 0.32 -0.78 c0.22 -0.64 0.26 -1.3 0.32 -1.96 c0.12 -1.4 0.08 -2.82 -0.28 -4.18 c-0.44 -1.74 -1.56 -3.34 -3.24 -4.08 c-0.76 -0.34 -1.62 -0.38 -2.44 -0.36 c-0.86 0 -1.74 -0.04 -2.6 0.04 c-0.24 0.02 -0.36 0.14 -0.4 0.36 c-0.04 0.24 -0.08 0.48 -0.08 0.7 c0.04 1.22 0 4.84 0.04 5.44 c0.02 0.54 -0.04 1.2 -0.04 1.74 c0.02 1.34 0 2.7 0 4.04 c0 0.56 -0.02 1.1 -0.02 1.66 c0 0.6 -0.22 0.86 1.42 0.86 c1.46 0 2.98 -0.12 4.36 -0.64 c1.28 -0.46 2.08 -1.64 2.64 -2.84 z M168.74 14.24 l0 -2.4 c0 -1.52 0.04 -2.5 -0.02 -3.78 l0 -0.24 c0.02 -0.42 0.08 -0.44 0.52 -0.44 c0.58 -0.02 1 0.12 1.5 0.32 s0.78 0.64 1.04 1.06 c0.5 0.82 0.7 1.72 0.74 2.66 c0.02 0.54 0.04 1.08 0.04 1.62 c0 2.56 -1.5 4.34 -2.82 4.34 c-0.88 0 -1.02 0.06 -1.02 -0.52 c0 -0.6 0.04 -1.2 0.04 -1.8 c-0.02 -0.26 -0.02 -0.54 -0.02 -0.82 z M189.29500000000002 14.84 c-0.06 -2.28 -0.04 -4.7 -0.02 -6.96 c0 -0.7 -0.04 -1.46 -0.04 -2.16 c0 -0.76 -0.3 -0.72 -0.7 -0.74 c-0.58 -0.02 -0.84 -0.02 -1.42 -0.02 c-0.38 -0.02 -0.54 0.08 -0.54 0.46 c0 1.96 -0.06 7.5 -0.04 8.3 s0.1 4.44 0.06 5.24 c-0.02 0.28 0 0.56 0.02 0.84 c0.02 0.1 0.08 0.2 0.24 0.2 c0.66 -0.04 1.28 -0.04 1.94 -0.06 c0.24 -0.02 0.44 -0.08 0.54 -0.34 c0.02 -0.14 -0.04 -3.8 -0.04 -4.76 z M209.13000000000002 5.460000000000001 c0.06 0.28 0.02 13.6 0.02 13.94 c0 0.6 -0.22 0.58 -0.62 0.58 c-0.6 0 -1.44 0.1 -1.62 -0.1 c-0.16 -0.14 -3.12 -7.28 -3.54 -8.18 c-0.04 -0.08 -0.14 -0.28 -0.22 -0.24 c-0.1 0.04 -0.06 0.18 -0.06 0.26 c-0.02 0.7 0.1 6.74 0.1 7.7 c0 0.48 -0.02 0.56 -0.42 0.56 l-1 0 c-0.26 0 -0.58 -0.02 -0.84 0.02 c-0.2 0 -0.3 -0.06 -0.32 -0.26 l0 -1.58 c0.04 -1.68 0 -11.64 0 -12.38 c0 -0.64 0.18 -0.76 0.82 -0.76 c0.44 -0.02 0.88 -0.02 1.32 -0.02 c0.14 0 0.22 0.02 0.3 0.2 c0.54 1.26 2.84 7.04 3.2 7.74 c0.06 0.14 0.28 0.7 0.4 0.76 l0.02 0 c0.08 -0.08 0.06 -0.48 0.06 -0.6 c0 -0.3 -0.16 -7.32 -0.16 -7.46 c0 -0.2 -0.06 -0.38 0.04 -0.52 c0.06 -0.08 0.32 -0.1 0.42 -0.12 c0.56 -0.04 1.22 0.02 1.78 0 c0.28 0 0.26 0.2 0.32 0.46 z M229.38500000000002 16.64 c0.02 0.96 0 1.94 -0.06 2.9 c0 0.08 -0.06 0.16 -0.12 0.2 c-0.08 0.06 -0.18 0.1 -0.28 0.1 c-1.24 0.2 -2.74 0.3 -3.94 -0.1 c-2.7 -0.92 -4.54 -3.94 -4.54 -7.4 c0 -3.74 2.68 -7.38 6.58 -7.52 c0.52 -0.02 2.3 -0.1 2.24 0.78 c-0.04 0.64 0.02 1.16 0 1.82 c0 0.12 -0.08 0.2 -0.2 0.18 c-1.14 -0.14 -2.44 -0.5 -3.54 0.02 c-0.92 0.44 -1.56 1.38 -1.92 2.3 c-0.64 1.52 -0.5 3.28 -0.06 4.84 c0.34 1.24 1.08 2.7 2.56 2.74 c0.08 0.02 0.84 0.06 0.84 -0.02 l-0.06 -2.56 c-0.02 -0.12 -0.02 -0.24 -0.04 -0.36 s-0.1 -0.16 -0.22 -0.18 c-0.32 0 -0.32 -0.02 -0.64 -0.02 c-0.74 0 -0.58 -0.5 -0.6 -0.66 c-0.02 -0.3 0 -0.58 -0.02 -0.88 c-0.02 -0.28 0.06 -0.5 0.34 -0.54 l0.24 0 c1.04 -0.06 2.1 0.02 3.2 0.02 c0.16 0 0.24 0.2 0.24 0.38 c0.02 0.2 0.02 0.34 0.02 0.54 c0.06 0.98 -0.06 1.98 -0.04 2.96 c0.02 0.16 0.02 0.3 0.02 0.46 z"></path>
              </g>
            </svg>
          </div>
          <nav className="sidebar-nav">
            <ul>
              
                <li className="nav-item">
                  <Link to="/admin/dashboard">
                 
                    <span className="icon">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.74999 18.3333C12.2376 18.3333 15.1364 15.8128 15.7244 12.4941C15.8448 11.8143 15.2737 11.25 14.5833 11.25H9.99999C9.30966 11.25 8.74999 10.6903 8.74999 10V5.41666C8.74999 4.7263 8.18563 4.15512 7.50586 4.27556C4.18711 4.86357 1.66666 7.76243 1.66666 11.25C1.66666 15.162 4.83797 18.3333 8.74999 18.3333Z" />
                        <path d="M17.0833 10C17.7737 10 18.3432 9.43708 18.2408 8.75433C17.7005 5.14918 14.8508 2.29947 11.2457 1.75912C10.5629 1.6568 10 2.2263 10 2.91665V9.16666C10 9.62691 10.3731 10 10.8333 10H17.0833Z" />
                      </svg>
                    </span>
                    <span className="text">Dashboard</span>
              </Link>
                </li>
              <li className="nav-item">
                <a
                  href="index.html#0"
                  className="collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#ddmenu_2"
                  aria-controls="ddmenu_2"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.8097 1.66667C11.8315 1.66667 11.8533 1.6671 11.875 1.66796V4.16667C11.875 5.43232 12.901 6.45834 14.1667 6.45834H16.6654C16.6663 6.48007 16.6667 6.50186 16.6667 6.5237V16.6667C16.6667 17.5872 15.9205 18.3333 15 18.3333H5.00001C4.07954 18.3333 3.33334 17.5872 3.33334 16.6667V3.33334C3.33334 2.41286 4.07954 1.66667 5.00001 1.66667H11.8097ZM6.66668 7.70834C6.3215 7.70834 6.04168 7.98816 6.04168 8.33334C6.04168 8.67851 6.3215 8.95834 6.66668 8.95834H10C10.3452 8.95834 10.625 8.67851 10.625 8.33334C10.625 7.98816 10.3452 7.70834 10 7.70834H6.66668ZM6.04168 11.6667C6.04168 12.0118 6.3215 12.2917 6.66668 12.2917H13.3333C13.6785 12.2917 13.9583 12.0118 13.9583 11.6667C13.9583 11.3215 13.6785 11.0417 13.3333 11.0417H6.66668C6.3215 11.0417 6.04168 11.3215 6.04168 11.6667ZM6.66668 14.375C6.3215 14.375 6.04168 14.6548 6.04168 15C6.04168 15.3452 6.3215 15.625 6.66668 15.625H13.3333C13.6785 15.625 13.9583 15.3452 13.9583 15C13.9583 14.6548 13.6785 14.375 13.3333 14.375H6.66668Z" />
                      <path d="M13.125 2.29167L16.0417 5.20834H14.1667C13.5913 5.20834 13.125 4.74197 13.125 4.16667V2.29167Z" />
                    </svg>
                  </span>
                  <span className="text">Categories</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="kanban.html">
                  <span className="icon">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.49999 3.33333C2.03976 3.33333 1.66666 3.70643 1.66666 4.16666V7.49999C1.66666 7.96023 2.03976 8.33333 2.49999 8.33333H5.83332C6.29356 8.33333 6.66666 7.96023 6.66666 7.49999V4.16666C6.66666 3.70643 6.29356 3.33333 5.83332 3.33333H2.49999Z" />
                      <path d="M2.49999 11.6667C2.03976 11.6667 1.66666 12.0398 1.66666 12.5V15.8333C1.66666 16.2936 2.03976 16.6667 2.49999 16.6667H5.83332C6.29356 16.6667 6.66666 16.2936 6.66666 15.8333V12.5C6.66666 12.0398 6.29356 11.6667 5.83332 11.6667H2.49999Z" />
                      <path d="M8.33334 4.16667C8.33334 3.8215 8.61318 3.54167 8.95834 3.54167H17.7083C18.0535 3.54167 18.3333 3.8215 18.3333 4.16667C18.3333 4.51185 18.0535 4.79167 17.7083 4.79167H8.95834C8.61318 4.79167 8.33334 4.51185 8.33334 4.16667Z" />
                      <path d="M8.33334 7.5C8.33334 7.15483 8.61318 6.875 8.95834 6.875H14.7917C15.1368 6.875 15.4167 7.15483 15.4167 7.5C15.4167 7.84517 15.1368 8.125 14.7917 8.125H8.95834C8.61318 8.125 8.33334 7.84517 8.33334 7.5Z" />
                      <path d="M8.95834 11.875C8.61318 11.875 8.33334 12.1548 8.33334 12.5C8.33334 12.8452 8.61318 13.125 8.95834 13.125H17.7083C18.0535 13.125 18.3333 12.8452 18.3333 12.5C18.3333 12.1548 18.0535 11.875 17.7083 11.875H8.95834Z" />
                      <path d="M8.95834 15.2083C8.61318 15.2083 8.33334 15.4882 8.33334 15.8333C8.33334 16.1785 8.61318 16.4583 8.95834 16.4583H14.7917C15.1368 16.4583 15.4167 16.1785 15.4167 15.8333C15.4167 15.4882 15.1368 15.2083 14.7917 15.2083H8.95834Z" />
                    </svg>
                  </span>
                  <span className="text">Projects</span>
                </a>
              </li>
                <li className="nav-item">
              <Link to="/admin/users">
                  
                    <span className="icon">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3.33334 11.6667C3.33334 10.7462 4.07954 10 5.00001 10H15C15.9205 10 16.6667 10.7462 16.6667 11.6667C16.6667 15.3486 13.6819 18.3333 10 18.3333C6.31811 18.3333 3.33334 15.3486 3.33334 11.6667Z" />
                        <path d="M13.3333 4.99999C13.3333 6.84094 11.8409 8.33332 9.99999 8.33332C8.15904 8.33332 6.66666 6.84094 6.66666 4.99999C6.66666 3.15904 8.15904 1.66666 9.99999 1.66666C11.8409 1.66666 13.3333 3.15904 13.3333 4.99999Z" />
                      </svg>
                    </span>
                    <span className="text">Users</span>
              </Link>
                </li>
              <li className="nav-item">
                <a href="invoice.html">
                  <span className="icon">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.33334 3.35442C3.33334 2.4223 4.07954 1.66666 5.00001 1.66666H15C15.9205 1.66666 16.6667 2.4223 16.6667 3.35442V16.8565C16.6667 17.5519 15.8827 17.9489 15.3333 17.5317L13.8333 16.3924C13.537 16.1673 13.1297 16.1673 12.8333 16.3924L10.5 18.1646C10.2037 18.3896 9.79634 18.3896 9.50001 18.1646L7.16668 16.3924C6.87038 16.1673 6.46298 16.1673 6.16668 16.3924L4.66668 17.5317C4.11731 17.9489 3.33334 17.5519 3.33334 16.8565V3.35442ZM4.79168 5.04218C4.79168 5.39173 5.0715 5.6751 5.41668 5.6751H10C10.3452 5.6751 10.625 5.39173 10.625 5.04218C10.625 4.69264 10.3452 4.40927 10 4.40927H5.41668C5.0715 4.40927 4.79168 4.69264 4.79168 5.04218ZM5.41668 7.7848C5.0715 7.7848 4.79168 8.06817 4.79168 8.41774C4.79168 8.76724 5.0715 9.05066 5.41668 9.05066H10C10.3452 9.05066 10.625 8.76724 10.625 8.41774C10.625 8.06817 10.3452 7.7848 10 7.7848H5.41668ZM4.79168 11.7932C4.79168 12.1428 5.0715 12.4262 5.41668 12.4262H10C10.3452 12.4262 10.625 12.1428 10.625 11.7932C10.625 11.4437 10.3452 11.1603 10 11.1603H5.41668C5.0715 11.1603 4.79168 11.4437 4.79168 11.7932ZM13.3333 4.40927C12.9882 4.40927 12.7083 4.69264 12.7083 5.04218C12.7083 5.39173 12.9882 5.6751 13.3333 5.6751H14.5833C14.9285 5.6751 15.2083 5.39173 15.2083 5.04218C15.2083 4.69264 14.9285 4.40927 14.5833 4.40927H13.3333ZM12.7083 8.41774C12.7083 8.76724 12.9882 9.05066 13.3333 9.05066H14.5833C14.9285 9.05066 15.2083 8.76724 15.2083 8.41774C15.2083 8.06817 14.9285 7.7848 14.5833 7.7848H13.3333C12.9882 7.7848 12.7083 8.06817 12.7083 8.41774ZM13.3333 11.1603C12.9882 11.1603 12.7083 11.4437 12.7083 11.7932C12.7083 12.1428 12.9882 12.4262 13.3333 12.4262H14.5833C14.9285 12.4262 15.2083 12.1428 15.2083 11.7932C15.2083 11.4437 14.9285 11.1603 14.5833 11.1603H13.3333Z" />
                    </svg>
                  </span>
                  <span className="text">Invoices</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="task.html">
                  <span className="icon">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.49999 3.33334C2.03976 3.33334 1.66666 3.70644 1.66666 4.16668V5.83334C1.66666 6.29358 2.03976 6.66668 2.49999 6.66668H4.16666C4.62689 6.66668 4.99999 6.29358 4.99999 5.83334V4.16668C4.99999 3.70644 4.62689 3.33334 4.16666 3.33334H2.49999Z" />
                      <path d="M2.49999 8.33334C2.03976 8.33334 1.66666 8.70643 1.66666 9.16668V10.8333C1.66666 11.2936 2.03976 11.6667 2.49999 11.6667H4.16666C4.62689 11.6667 4.99999 11.2936 4.99999 10.8333V9.16668C4.99999 8.70643 4.62689 8.33334 4.16666 8.33334H2.49999Z" />
                      <path d="M1.66666 14.1667C1.66666 13.7064 2.03976 13.3333 2.49999 13.3333H4.16666C4.62689 13.3333 4.99999 13.7064 4.99999 14.1667V15.8333C4.99999 16.2936 4.62689 16.6667 4.16666 16.6667H2.49999C2.03976 16.6667 1.66666 16.2936 1.66666 15.8333V14.1667Z" />
                      <path d="M7.29166 4.375C6.94648 4.375 6.66666 4.65483 6.66666 5C6.66666 5.34517 6.94648 5.625 7.29166 5.625H17.7083C18.0535 5.625 18.3333 5.34517 18.3333 5C18.3333 4.65483 18.0535 4.375 17.7083 4.375H7.29166Z" />
                      <path d="M6.66666 10C6.66666 9.65483 6.94648 9.375 7.29166 9.375H17.7083C18.0535 9.375 18.3333 9.65483 18.3333 10C18.3333 10.3452 18.0535 10.625 17.7083 10.625H7.29166C6.94648 10.625 6.66666 10.3452 6.66666 10Z" />
                      <path d="M7.29166 14.375C6.94648 14.375 6.66666 14.6548 6.66666 15C6.66666 15.3452 6.94648 15.625 7.29166 15.625H17.7083C18.0535 15.625 18.3333 15.3452 18.3333 15C18.3333 14.6548 18.0535 14.375 17.7083 14.375H7.29166Z"></path>
                    </svg>
                  </span>
                  <span className="text">Rewards</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <div className="overlay" />
        {/* ======== sidebar-nav end =========== */}
      </>
    </div>
  );
}

export default SideBar
