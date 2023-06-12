const activityItems = [
  {
    user: {
      name: "Mobil",
      imageUrl: "mobil.png",
    },
    services: [
      { name: "oil replacement", price: "LE 500" },
      { name: "tires alignment", price: "LE 100" },
    ],
    actions: [
      {
        name: "Sold a motor oil replacement service",
        dateTime: "2023-01-23T11:00",
      },
      {
        name: "Sold a tires alignment service",
        dateTime: "2023-04-23T11:00",
      },
    ],
  },
];

export default function ServicesList() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {activityItems.map((item, i) => (
        <li key={i} className="py-4">
          <div className="flex items-center gap-x-3 mb-4">
            <img
              src={item.user.imageUrl}
              alt=""
              className="h-6 w-6 flex-none rounded-full bg-gray-800"
            />
            <p className="flex-auto truncate text-xl font-semibold leading-6 text-gray-900">
              {item.user.name}
            </p>
          </div>
          <h3 className="text-gray-800">Services:</h3>
          {item.services.map((service, k) => (
            <div key={k} className="flex justify-between mr-96">
              <p key={k} className="mt-3 truncate text-sm text-gray-500">
                {"- "}
                <span className="text-gray-700">{service.name}</span>
              </p>
              <p className="text-gray-700">{service.price}</p>
            </div>
          ))}
          <hr className="my-4" />
          <h3 className="text-gray-800">Actions:</h3>
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
