export const style = {
    MODAL_STYLE: {
        position: "fixed",
        top: "0%",
        left: "0%",
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0,.6)",
    },
    OVERLAY_STYLE: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        height: "70%",
        width: "95%",
        zIndex: 3,
        textAlign: "center",
        fontSize: "1.5rem",
        backgroundColor: "#fff",
    },

    BUTTON_STYLE: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        top: "4%",
        left: "10%",
        height: "50px",
        width: "50px",
        backgroundColor: "#fff",
        borderRadius: "10%",
    },
    P_STYLE: {paddingLeft: "10%", paddingRight: "10%"},
    BUTTON_STYLE_ITEM: {
        position: "relative",
        paddingTop: "5",
        height: "5px",
        width: "70%",
        left: "50%",
        transform: "translate(-50%)",
        borderRadius: "20%",
        textAlign: "center",
        backgroundColor: "black",
    },
    IMG_REGULAR_STYLE:{
        position:"relative",
        top:"15%",
    },
    IMG_REGULAR_CROSS:{
        position:"absolute",
        bottom:"2%",
        left:"50%",
        transform:"translate(-50%,-2%)",
        backgroundColor:"hsl(100, 6%, 45%)",
        padding:"5px",
        borderRadius:"50%"
      
      
    }
};
