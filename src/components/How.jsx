import React from 'react';

const How = () => {
  return (
    <section className="bg-[#DDF0FA4F]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 mx-auto lg:mb-16 text-center">
          <h2 className="mb-4 text-4xl tracking-tight mx-auto font-extrabold text-[#2092CF]">
            How it works
          </h2>
        </div>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#2092CF] lg:h-12 lg:w-12">
              <p className="w-5 h-5 lg:w-6 lg:h-6 text-white text-xl flex justify-center">
                1
              </p>
            </div>
            <h3 className="mb-6 text-3xl lg:text-3xl font-bold text-[#5A5555] ">Register Subscription</h3>
            <p className="text-[#5A5555] text-2xl font-light lg:text-3xl ">
              Sign up your company by providing the necessary information. After the verification process, you will receive admin credentials to access the dashboard.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#2092CF] lg:h-12 lg:w-12">
            <p className="w-5 h-5 lg:w-6 lg:h-6 text-white text-xl flex justify-center">
                2
              </p>
            </div>
            <h3 className="mb-6 text-3xl lg:text-3xl font-bold text-[#5A5555] ">Set Up Admin Dashboard</h3>
            <p className="text-[#5A5555] text-2xl font-light lg:text-3xl ">
              Log in to the admin dashboard using the provided credentials to manage your company's settings and configurations.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#2092CF] lg:h-12 lg:w-12">
            <p className="w-5 h-5 lg:w-6 lg:h-6 text-white text-xl flex justify-center">
                3
              </p>
            </div>
            <h3 className="mb-6 text-3xl lg:text-3xl font-bold text-[#5A5555] ">Add Employees</h3>
            <p className="text-[#5A5555] text-2xl font-light lg:text-3xl ">
            Onboard your employees and have them add their details, including their name, roles, and available time slots.            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#2092CF] lg:h-12 lg:w-12">
            <p className="w-5 h-5 lg:w-6 lg:h-6 text-white text-xl flex justify-center">
                4
              </p>
            </div>
            <h3 className="mb-6 text-3xl lg:text-3xl font-bold text-[#5A5555] ">Manage Bookings</h3>
            <p className="text-[#5A5555] text-2xl font-light lg:text-3xl ">
            Your clients can now easily book appointments with the right employee through the platform's intuitive booking system.            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default How;
