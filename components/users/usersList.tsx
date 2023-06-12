const activityItems = [
  {
    user: {
      name: "Michael Fawzy",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    actions: [
      {
        name: "Bought a motor oil replacement service",
        dateTime: "2023-01-23T11:00",
      },
      {
        name: "Bought a spark plugs replacement service",
        dateTime: "2023-04-23T11:00",
      },
    ],
  },
];

export default function UsersList() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {activityItems.map((item, i) => (
        <li key={i} className="py-4">
          <div className="flex items-center gap-x-3">
            <img
              src={item.user.imageUrl}
              alt=""
              className="h-6 w-6 flex-none rounded-full bg-gray-800"
            />
            <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-gray-900">
              {item.user.name}
            </h3>
          </div>
          {item.actions.map((action, k) => (
            <p key={k} className="mt-3 truncate text-sm text-gray-500">
              {"- "}
              <span className="text-gray-700">{action.name} </span>
              on{" "}
              <span className="text-gray-700">
                {new Date(action.dateTime).toDateString()}
              </span>
            </p>
          ))}
        </li>
      ))}
    </ul>
  );
}
