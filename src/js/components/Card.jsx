
export const Card = () => {

    const datos = [
        {
            image: "https://picsum.photos/seed/picsum/300/300",
            cardTitle: "Card title",
            cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quisquam fuga quia animi. Esse, voluptatem.",
            button: "Find Out More!"
        },
        {
            image: "https://picsum.photos/seed/picsum/300/300",
            cardTitle: "Card title",
            cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quisquam fuga quia animi. Esse, voluptatem.",
            button: "Find Out More!"
        },
        {
            image: "https://picsum.photos/seed/picsum/300/300",
            cardTitle: "Card title",
            cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quisquam fuga quia animi. Esse, voluptatem.",
            button: "Find Out More!"
        },
        {
            image: "https://picsum.photos/seed/picsum/300/300",
            cardTitle: "Card title",
            cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quisquam fuga quia animi. Esse, voluptatem.",
            button: "Find Out More!"
        },
    ]
    return (
        <div className="container">
            <div className="row">
                {
                    datos.map((datos, index) => {
                        return (
                            <div key={index} className="card col-12-col-sm-6 col-md-3 mt-3 p-3">
                                <img src={datos.image} className="card-img-top" alt="Card image" />
                                <div className="card-body">
                                    <h5 className="card-title p-0">{datos.cardTitle}</h5>
                                    <p className="card-text">{datos.cardText}</p>
                                    <div className="card-button col-3 bg-transparent border-secondary w-100">
                                        <a href="#" className="btn btn-primary d-grid gap-2 col-8 mx-auto">{datos.button}</a>
                                    </div>
                                </div>
                            </div>)
                    })
                }
            </div>
        </div>
    )
}

