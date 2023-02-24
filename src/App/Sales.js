import React from "react";
import axios from "axios";
import logo from "../Asset/401gameslogo.png";



class Sales extends React.Component {
    constructor(props) {
        super(props);
        window.salesComponent = this;
        this.state = {
            productInfo: [{
                image: "",
                title: "",
                vendor: "",
                price: "",
                comparePrice: ""
            }, {
                image: "",
                title: "",
                vendor: "",
                price: "",
                comparePrice: ""
            }, {
                image: "",
                title: "",
                vendor: "",
                price: "",
                comparePrice: ""
            }, {
                image: "",
                title: "",
                vendor: "",
                price: "",
                comparePrice: ""
            }, {
                image: "",
                title: "",
                vendor: "",
                price: "",
                comparePrice: ""
            }, {
                image: "",
                title: "",
                vendor: "",
                price: "",
                comparePrice: ""
            }, {
                image: "",
                title: "",
                vendor: "",
                price: "",
                comparePrice: ""
            }, {
                image: "",
                title: "",
                vendor: "",
                price: "",
                comparePrice: ""
            }, {
                image: "",
                title: "",
                vendor: "",
                price: "",
                comparePrice: ""
            }, {
                image: "",
                title: "",
                vendor: "",
                price: "",
                comparePrice: ""
            }],
            loading: true
        }
    }

    async componentDidMount() {

        await axios
            .get(
                "https://store.401games.ca/collections/vaughan-display/products.json?limit=10"
            )
            .then(res => {
                let data = res.data.products;
                let products = this.state.productInfo;
                for (let i = 0; i < data.length; i++) {
                    products[i].image = data[i].images[0].src
                    products[i].title = data[i].title
                    products[i].vendor = data[i].vendor
                    products[i].price = data[i].variants[0].price
                    products[i].comparePrice = data[i].variants[0].compare_at_price
                }
                this.setState({ productInfo: products });
                this.setState({ loading: false })
            })
            .catch(err => {
                console.log(err)
            })
    }

    getRow(row, key) {
        return (
            <tr key={key} style={{ width: "100vw", height: "33vh", maxHeight: "33vh", backgroundColor:"rgba(129,195,66,255)" }}>
                <td style={{ width: "33vw", height: "33vh" }}>
                    <div className="container-fluid" style={{ width: "33vw", height: "33vh", maxHeight: "33vh" }}>
                        <img src={row.image} alt="..." className="saleImg" />
                    </div>
                </td>

                <td style={{ width: "33vw", height: "33vh" }}>
                    <h1 style={{color:"white"}}><b>{row.title}</b></h1>
                    <h3>{row.vendor}</h3>
                </td>

                <td style={{ width: "33vw", height: "33vh" }}>
                    {row.comparePrice !== null && row.comparePrice !== "" ? (
                        <strong>
                            <h3 style={{ color: "red" }}><del><em>${row.comparePrice}</em></del></h3>
                            <h1 style={{ color: "yellow" }}><b>${row.price}</b></h1>
                        </strong>
                    ) : (
                        <strong>
                            <h1 style={{ color: "yellow" }}><b>${row.price}</b></h1>
                        </strong>
                    )
                    }
                </td>
            </tr>)
    }

    playScroll() {
        let el = document.getElementById("productsTable");

    }


    resetScroll() {
        let el = document.getElementById("productsTable");


    }

    render() {
        return this.state.loading ? (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        ) : (<div style={{ overflowY: "auto", minWidth: "100vw", minHeight: "100vh", backgroundColor:"rgba(71,138,64,255)" }}>
            <div className="d-flex align-items-center justify-content-center" style={{ width: "100vw", height: "15vh", position: "absolute", zIndex: 10, backgroundColor: "rgba(71,138,64,255)", opacity: 0.8 }}>
                
                    
                            <img style={{height:"15vh", width:"auto", padding:"5px"}} src={logo} alt="..."/>
                        
                            <h1 style={{ fontSize: "120px", color: "red", fontFamily: "Karla" }}><b>ON SALE!</b></h1>
                        
                    
                
                    
                </div>

                <table id="productsTable" className="table table-striped animate" style={{ position: "relative", animation: "example 45s", backgroundColor:"rgba(71,138,64,255)" }}>
                    <tbody>
                        <tr key="-1" style={{ width: "100vw", height: "33vh", backgroundColor:"rgba(129,195,66,255)" }}><td></td><td></td><td></td></tr>
                        {this.getRow(this.state.productInfo[0], 0)}
                        {this.getRow(this.state.productInfo[1], 1)}
                        {this.getRow(this.state.productInfo[2], 2)}
                        {this.getRow(this.state.productInfo[3], 3)}
                        {this.getRow(this.state.productInfo[4], 4)}
                        {this.getRow(this.state.productInfo[5], 5)}
                        {this.getRow(this.state.productInfo[6], 6)}
                        {this.getRow(this.state.productInfo[7], 7)}
                        {this.getRow(this.state.productInfo[8], 8)}
                        {this.getRow(this.state.productInfo[9], 9)}
                    </tbody>
                </table>

            </div>)

    }
}

            export default Sales;