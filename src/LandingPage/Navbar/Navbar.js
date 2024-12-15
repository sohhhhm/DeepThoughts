import React, { useState } from "react";

const ExpandableNavbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prevState) => !prevState); // Toggle the state
  };

  return (
    <div style={{ ...styles.container, width: isExpanded ? "382px" : "132px" }}>
      <div
        style={{
          ...styles.top,
          width: isExpanded ? "382px" : "132px", // Expand with navbar width
        }}
        onClick={handleToggle}
      >
        <img
          src="Images/arrow.png"
          alt="Arrow"
          style={{
            transform: isExpanded ? "rotate(-180deg)" : "rotate(0deg)", // Rotate the arrow based on state
            transition: "transform 0.3s ease-in-out", // Smooth rotation transition
          }}
        />
      </div>

      <div
        style={{
          ...styles.bottom,
          width: isExpanded ? "382px" : "132px",
        }}
      >
        {isExpanded && (
          <span>
            <h3 style={{ margin: "20px" }}>Explore the world of management</h3>
            <ul style={styles.navList}>
              <li style={styles.navItem}>Technical Project Management</li>
              <li style={styles.navItem}>Threadbuild</li>
              <li style={styles.navItem}>Structure your pointers</li>
              <li style={styles.navItem}>4SA Method</li>
            </ul>
          </span>
        )}
      </div>
      <div className="leftBar">
        <svg
          width="50"
          height="394"
          viewBox="0 0 50 394"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 394C13.4315 394 -5.87108e-07 380.569 -1.31134e-06 364L-1.59109e-05 30C-1.66352e-05 13.4315 13.4314 -5.87108e-07 30 -1.31134e-06L50 -2.18557e-06L50 394L30 394Z"
            fill="black"
          />
          <path
            d="M31 94H29.544L23.688 85.12V94H22.232V82.832H23.688L29.544 91.696V82.832H31V94ZM26.056 118.144C25.2347 118.144 24.488 117.957 23.816 117.584C23.1547 117.211 22.632 116.683 22.248 116C21.8747 115.307 21.688 114.507 21.688 113.6C21.688 112.704 21.88 111.915 22.264 111.232C22.6587 110.539 23.192 110.011 23.864 109.648C24.536 109.275 25.288 109.088 26.12 109.088C26.952 109.088 27.704 109.275 28.376 109.648C29.048 110.011 29.576 110.533 29.96 111.216C30.3547 111.899 30.552 112.693 30.552 113.6C30.552 114.507 30.3493 115.307 29.944 116C29.5493 116.683 29.0107 117.211 28.328 117.584C27.6453 117.957 26.888 118.144 26.056 118.144ZM26.056 116.864C26.5787 116.864 27.0693 116.741 27.528 116.496C27.9867 116.251 28.3547 115.883 28.632 115.392C28.92 114.901 29.064 114.304 29.064 113.6C29.064 112.896 28.9253 112.299 28.648 111.808C28.3707 111.317 28.008 110.955 27.56 110.72C27.112 110.475 26.6267 110.352 26.104 110.352C25.5707 110.352 25.08 110.475 24.632 110.72C24.1947 110.955 23.8427 111.317 23.576 111.808C23.3093 112.299 23.176 112.896 23.176 113.6C23.176 114.315 23.304 114.917 23.56 115.408C23.8267 115.899 24.1787 116.267 24.616 116.512C25.0533 116.747 25.5333 116.864 26.056 116.864ZM24.008 134.432V139.6C24.008 140.027 24.0987 140.331 24.28 140.512C24.4613 140.683 24.776 140.768 25.224 140.768H26.296V142H24.984C24.1733 142 23.5653 141.813 23.16 141.44C22.7547 141.067 22.552 140.453 22.552 139.6V134.432H21.416V133.232H22.552V131.024H24.008V133.232H26.296V134.432H24.008ZM22.984 155.808C22.7067 155.808 22.472 155.712 22.28 155.52C22.088 155.328 21.992 155.093 21.992 154.816C21.992 154.539 22.088 154.304 22.28 154.112C22.472 153.92 22.7067 153.824 22.984 153.824C23.2507 153.824 23.4747 153.92 23.656 154.112C23.848 154.304 23.944 154.539 23.944 154.816C23.944 155.093 23.848 155.328 23.656 155.52C23.4747 155.712 23.2507 155.808 22.984 155.808ZM23.688 157.232V166H22.232V157.232H23.688ZM21.688 185.6C21.688 184.693 21.8693 183.904 22.232 183.232C22.5947 182.549 23.096 182.021 23.736 181.648C24.3867 181.275 25.128 181.088 25.96 181.088C27.0373 181.088 27.9227 181.349 28.616 181.872C29.32 182.395 29.784 183.12 30.008 184.048H28.44C28.2907 183.515 27.9973 183.093 27.56 182.784C27.1333 182.475 26.6 182.32 25.96 182.32C25.128 182.32 24.456 182.608 23.944 183.184C23.432 183.749 23.176 184.555 23.176 185.6C23.176 186.656 23.432 187.472 23.944 188.048C24.456 188.624 25.128 188.912 25.96 188.912C26.6 188.912 27.1333 188.763 27.56 188.464C27.9867 188.165 28.28 187.739 28.44 187.184H30.008C29.7733 188.08 29.304 188.8 28.6 189.344C27.896 189.877 27.016 190.144 25.96 190.144C25.128 190.144 24.3867 189.957 23.736 189.584C23.096 189.211 22.5947 188.683 22.232 188C21.8693 187.317 21.688 186.517 21.688 185.6ZM30.232 209.28C30.232 209.557 30.216 209.851 30.184 210.16H23.176C23.2293 211.024 23.5227 211.701 24.056 212.192C24.6 212.672 25.256 212.912 26.024 212.912C26.6533 212.912 27.176 212.768 27.592 212.48C28.0187 212.181 28.3173 211.787 28.488 211.296H30.056C29.8213 212.139 29.352 212.827 28.648 213.36C27.944 213.883 27.0693 214.144 26.024 214.144C25.192 214.144 24.4453 213.957 23.784 213.584C23.1333 213.211 22.6213 212.683 22.248 212C21.8747 211.307 21.688 210.507 21.688 209.6C21.688 208.693 21.8693 207.899 22.232 207.216C22.5947 206.533 23.1013 206.011 23.752 205.648C24.4133 205.275 25.1707 205.088 26.024 205.088C26.856 205.088 27.592 205.269 28.232 205.632C28.872 205.995 29.3627 206.496 29.704 207.136C30.056 207.765 30.232 208.48 30.232 209.28ZM28.728 208.976C28.728 208.421 28.6053 207.947 28.36 207.552C28.1147 207.147 27.7787 206.843 27.352 206.64C26.936 206.427 26.472 206.32 25.96 206.32C25.224 206.32 24.5947 206.555 24.072 207.024C23.56 207.493 23.2667 208.144 23.192 208.976H28.728ZM27.816 256.256C28.2213 256.32 28.5893 256.485 28.92 256.752C29.2613 257.019 29.528 257.349 29.72 257.744C29.9227 258.139 30.024 258.56 30.024 259.008C30.024 259.573 29.88 260.085 29.592 260.544C29.304 260.992 28.8827 261.349 28.328 261.616C27.784 261.872 27.1387 262 26.392 262H22.232V250.848H26.232C26.9893 250.848 27.6347 250.976 28.168 251.232C28.7013 251.477 29.1013 251.813 29.368 252.24C29.6347 252.667 29.768 253.147 29.768 253.68C29.768 254.341 29.5867 254.891 29.224 255.328C28.872 255.755 28.4027 256.064 27.816 256.256ZM23.688 255.664H26.136C26.8187 255.664 27.3467 255.504 27.72 255.184C28.0933 254.864 28.28 254.421 28.28 253.856C28.28 253.291 28.0933 252.848 27.72 252.528C27.3467 252.208 26.808 252.048 26.104 252.048H23.688V255.664ZM26.264 260.8C26.9893 260.8 27.5547 260.629 27.96 260.288C28.3653 259.947 28.568 259.472 28.568 258.864C28.568 258.245 28.3547 257.76 27.928 257.408C27.5013 257.045 26.9307 256.864 26.216 256.864H23.688V260.8H26.264ZM26.056 286.144C25.2347 286.144 24.488 285.957 23.816 285.584C23.1547 285.211 22.632 284.683 22.248 284C21.8747 283.307 21.688 282.507 21.688 281.6C21.688 280.704 21.88 279.915 22.264 279.232C22.6587 278.539 23.192 278.011 23.864 277.648C24.536 277.275 25.288 277.088 26.12 277.088C26.952 277.088 27.704 277.275 28.376 277.648C29.048 278.011 29.576 278.533 29.96 279.216C30.3547 279.899 30.552 280.693 30.552 281.6C30.552 282.507 30.3493 283.307 29.944 284C29.5493 284.683 29.0107 285.211 28.328 285.584C27.6453 285.957 26.888 286.144 26.056 286.144ZM26.056 284.864C26.5787 284.864 27.0693 284.741 27.528 284.496C27.9867 284.251 28.3547 283.883 28.632 283.392C28.92 282.901 29.064 282.304 29.064 281.6C29.064 280.896 28.9253 280.299 28.648 279.808C28.3707 279.317 28.008 278.955 27.56 278.72C27.112 278.475 26.6267 278.352 26.104 278.352C25.5707 278.352 25.08 278.475 24.632 278.72C24.1947 278.955 23.8427 279.317 23.576 279.808C23.3093 280.299 23.176 280.896 23.176 281.6C23.176 282.315 23.304 282.917 23.56 283.408C23.8267 283.899 24.1787 284.267 24.616 284.512C25.0533 284.747 25.5333 284.864 26.056 284.864ZM21.688 305.584C21.688 304.688 21.8693 303.904 22.232 303.232C22.5947 302.549 23.0907 302.021 23.72 301.648C24.36 301.275 25.0693 301.088 25.848 301.088C26.616 301.088 27.2827 301.253 27.848 301.584C28.4133 301.915 28.8347 302.331 29.112 302.832V301.232H30.584V310H29.112V308.368C28.824 308.88 28.392 309.307 27.816 309.648C27.2507 309.979 26.5893 310.144 25.832 310.144C25.0533 310.144 24.3493 309.952 23.72 309.568C23.0907 309.184 22.5947 308.645 22.232 307.952C21.8693 307.259 21.688 306.469 21.688 305.584ZM29.112 305.6C29.112 304.939 28.9787 304.363 28.712 303.872C28.4453 303.381 28.0827 303.008 27.624 302.752C27.176 302.485 26.68 302.352 26.136 302.352C25.592 302.352 25.096 302.48 24.648 302.736C24.2 302.992 23.8427 303.365 23.576 303.856C23.3093 304.347 23.176 304.923 23.176 305.584C23.176 306.256 23.3093 306.843 23.576 307.344C23.8427 307.835 24.2 308.213 24.648 308.48C25.096 308.736 25.592 308.864 26.136 308.864C26.68 308.864 27.176 308.736 27.624 308.48C28.0827 308.213 28.4453 307.835 28.712 307.344C28.9787 306.843 29.112 306.261 29.112 305.6ZM23.688 326.656C23.944 326.155 24.3067 325.765 24.776 325.488C25.256 325.211 25.8373 325.072 26.52 325.072V326.576H26.136C24.504 326.576 23.688 327.461 23.688 329.232V334H22.232V325.232H23.688V326.656ZM21.688 353.584C21.688 352.688 21.8693 351.904 22.232 351.232C22.5947 350.549 23.0907 350.021 23.72 349.648C24.36 349.275 25.0747 349.088 25.864 349.088C26.5467 349.088 27.1813 349.248 27.768 349.568C28.3547 349.877 28.8027 350.288 29.112 350.8V346.16H30.584V358H29.112V356.352C28.824 356.875 28.3973 357.307 27.832 357.648C27.2667 357.979 26.6053 358.144 25.848 358.144C25.0693 358.144 24.36 357.952 23.72 357.568C23.0907 357.184 22.5947 356.645 22.232 355.952C21.8693 355.259 21.688 354.469 21.688 353.584ZM29.112 353.6C29.112 352.939 28.9787 352.363 28.712 351.872C28.4453 351.381 28.0827 351.008 27.624 350.752C27.176 350.485 26.68 350.352 26.136 350.352C25.592 350.352 25.096 350.48 24.648 350.736C24.2 350.992 23.8427 351.365 23.576 351.856C23.3093 352.347 23.176 352.923 23.176 353.584C23.176 354.256 23.3093 354.843 23.576 355.344C23.8427 355.835 24.2 356.213 24.648 356.48C25.096 356.736 25.592 356.864 26.136 356.864C26.68 356.864 27.176 356.736 27.624 356.48C28.0827 356.213 28.4453 355.835 28.712 355.344C28.9787 354.843 29.112 354.261 29.112 353.6Z"
            fill="white"
          />
          <path
            d="M36.8333 29L17 48.8333M36.8333 48.8333L17 29"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

// Styles for the navbar and its elements
const styles = {
  container: {
    position: "absolute",
    width: "132px",
    display: "flex",
    height: "100vh",
    zIndex: 1000,
    
  },
  top: {
    height: "50px",
    backgroundColour: "#eee",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "black",
    cursor: "pointer",
    transition: "width 0.3s ease-in-out", // Smooth transition for expanding/collapsing
    border: "solid",
    borderRadius: "0px 22px 0px 0px",
    boxShadow: "5px 0px 5px rgba(0, 0, 0, 0.5)",

  },
  bottom: {
    color: "000",
    backgroundColor: "#FDFDFD",
    flexDirection: "row",
    position: "relative",
    top: "53px",
    borderRadius: "0 0 20px 20px",
    transition: "width 0.3s ease-in-out",
    boxShadow: "5px 2px 5px rgba(0, 0, 0, 0.5)",
  },
  navItem: {
    color: "#000",
    fontSize: "16px",
    transition: "background-color 0.3s out",
    cursor: "pointer",
  },
};

export default ExpandableNavbar;