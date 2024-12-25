

const MyReviewCard = ({item}) => {

    const { company_name, company_logo, service_name, date, review, rating } = item;


    return (
        <div className="flex items-start gap-10 bg-orange-100 rounded-2xl my-3 p-5">
            <div>
                <img className="w-32" src={company_logo} alt="logo" />
            </div>
            <div>
                <h2 className="text-2xl font-bold">{company_name}</h2>
                <h2 className="font-bold">{service_name}</h2>
                <div className="flex items-center gap-20">
                    <h2>Rating: {rating}</h2>
                    <h2>Posted Date: {date}</h2>
                </div>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default MyReviewCard;