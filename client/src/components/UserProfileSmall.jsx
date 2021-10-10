const UserProfileSmall = () => {
    const username = "John Doe";
    const upcomingEvents = 13;
    const tags = ['c++', 'python', 'java','sql','html','css'];

	return (
		<div className="h-auto py-10 w-auto rounded-lg bg-blue-100 max-w-lg">
			<div className="mt-3">
				<div className="inline-block ml-10  mr-2">
					<img
						src="/images/avtar.png"
						alt="Avatar"
						class="h-24 w-24 rounded-full inline"
					/>
				</div>
                <div className="inline-block ml-2">
                    <p className="text-xl">{username}</p>
                    <p className="text-xl">{upcomingEvents} Upcoming events</p>
                </div>
            </div>
            <div className="ml-32 inline-block">
                <ul className="space-x-4">
                    {tags.map(tag => (
                        <div className="inline-block m-1 bg-red-300 rounded-lg w-auto px-2 py-1"><li className="">{tag}</li></div>
                    ))}
                </ul>
            </div>
		</div>
	);
};
export default UserProfileSmall;
