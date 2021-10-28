const UserProfileSmall = () => {
  const username = "John Doe";
  const upcomingEvents = 13;
  const tags = ["c++", "python", "java", "sql", "html", "css"];

  return (
    <div className="w-auto py-10  rounded-lg bg-blue-100 h-auto">
      <div className="mt-2">
        <div className="inline-block ml-2 mr-2">
          <img
            src="/images/avtar.png"
            alt="Avatar"
            class="h-16 w-16 rounded-full inline"
          />
        </div>
        <div className="inline-block ml-2 ">
          <p className="text-lg">{username}</p>
          <p className="text-lg">{upcomingEvents} Upcoming events</p>
        </div>
      </div>
      <div className="ml-2 flex mt-4 justify-center">
        <ul className="">
          {tags.map((tag) => (
            <div className=" inline-block m-1 bg-red-300 rounded-lg w-auto text-xs px-2 py-1">
              <li className="">{tag}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default UserProfileSmall;
