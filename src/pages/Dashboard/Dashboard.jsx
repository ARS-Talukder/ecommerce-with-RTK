import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="flex">
                <div className="w-1/5 bg-pink-100 h-screen py-4 px-3 rounded-lg mr-4">
                    <ul className="">
                        <li><Link to='/dashboard' className='w-full btn btn-secondary mb-3'>Product List</Link></li>
                        <li><Link to='/dashboard/addproduct' className='w-full btn btn-secondary mb-3'>Add Product</Link></li>
                    </ul>

                </div>
                <div className="w-4/5">
                    <div className='w-full h-full dashboard-default-content'>
                        {/* Outlet is the Part of Nested Routes */}
                        <Outlet></Outlet>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Dashboard;