const BlogList = ({ cars }) => {
    return (
      <div className="blog-list">
        {<table>
                <thead>
                <tr>
                    <th>car type</th>
                    <th>manufacturer</th>
                    <th>model</th>
                    <th>region</th>
                    <th>license</th>
                    <th>price per day</th>
                    <th>Status</th>

                </tr>
                </thead>
                <tbody>
                    {
                        cars.map((car) => (
                            <tr key={car.license}>
                                {/* <td>{car.manufacturer}</td>
                                <td>{car.model}</td>
                                <td>{car.region}</td>
                                <td>{car.car_type}</td>
                                <td>{car.price_per_day}</td>
                                <td>{car.car_status}</td> */}
                                <td/>
                            </tr>
                        ))
                    }
                </tbody>
            </table>}
      </div>
    );
  }
   
  export default BlogList;