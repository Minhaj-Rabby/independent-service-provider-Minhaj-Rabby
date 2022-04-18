import React from "react";

const Blogs = () => {
	return (
		<div className="container mx-auto my-12">
			<h2 className="text-3xl text-center mb-10">Question answer</h2>
			<div className="accordion " id="accordionExample">
				<div className="accordion-item bg-white border border-gray-200">
					<h2 className="accordion-header mb-0" id="headingOne">
						<button
							className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-2xl text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none

      "
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							Difference between authorization and authentication
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body py-4 px-5">
							<p className="sm:text-xl">
								Authentication is the process of verifying who
								someone is, whereas authorization is the process
								of verifying what specific applications, files,
								and data a user has access to. The situation is
								like that of an airline that needs to determine
								which people can come on board. The first step
								is to confirm the identity of a passenger to
								make sure they are who they say they are. Once a
								passenger’s identity has been determined, the
								second step is verifying any special services
								the passenger has access to, whether it’s flying
								first-class or visiting the VIP lounge.
							</p>
						</div>
					</div>
				</div>
				<div className="accordion-item bg-white border border-gray-200">
					<h2 className="accordion-header mb-0" id="headingTwo">
						<button
							className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-2xl text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo"
						>
							Why are you using firebase? What other options do
							you have to implement authentication?
						</button>
					</h2>
					<div
						id="collapseTwo"
						className="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body py-4 px-5">
							<h2 className="text-xl">
								Why are you using firebase?
							</h2>
							<p>
								The Firebase Realtime Database lets you build
								rich, collaborative applications by allowing
								secure access to the database directly from
								client-side code.Data is persisted locally, and
								even while offline, realtime events continue to
								fire, giving the end user a responsive
								experience. So it easy to use...
							</p>
							<h2 className="text-xl my-2">
								{" "}
								What other options do you have to implement
								authentication?
							</h2>
							<ul>
								<li>– Back4App</li>
								<li>– Parse</li>
								<li>– AWS Amplify</li>
								<li>– Backendless</li>
								<li>– Kuzzle</li>
								<li> – Supabase</li>
								<li>– appwrite</li>
								<li>– NHost</li>
								<li>– Hasura</li>
								<li> – Deployd</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="accordion-item bg-white border border-gray-200">
					<h2 className="accordion-header mb-0" id="headingThree">
						<button
							className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-2xl text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree"
						>
							What other services does firebase provide other than
							authentication?
						</button>
					</h2>
					<div
						id="collapseThree"
						className="accordion-collapse collapse"
						aria-labelledby="headingThree"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body py-4 px-5">
							<ul>
								<li>
									Realtime Database — realtime, cloud hosted,
									NoSQL database
								</li>
								<li>
									Cloud Firestore — realtime, cloud hosted,
									NoSQL database
								</li>
								<li>
									Cloud Storage — massively scalable file
									storage
								</li>
								<li>
									Cloud Functions — “serverless”, event driven
									backend
								</li>
								<li>Firebase Hosting — global web hosting</li>
								<li>ML Kit —SDK for common ML tasks</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
