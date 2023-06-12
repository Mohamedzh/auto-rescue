import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/outline";
import Heading from "./heading";
import { useState } from "react";
import ModalBody from "../modal.tsx/modalBody";

const issues = [
  {
    id: 1,
    title: "Refund request for a service",
    author: { name: "Ahmed Sameh" },
    body: " cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum    varius duis at consectetur lorem donec massa sapien faucibus et    molestie ac feugiat sed lectus",
    date: "2d ago",
    dateTime: "2023-01-23T22:34Z",
    status: "active",
  },
  {
    id: 2,
    title: "I forgot my account password",
    author: { name: "Michael Fawzy" },
    body: " cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum    varius duis at consectetur lorem donec massa sapien faucibus et    molestie ac feugiat sed lectus",
    date: "2d ago",
    dateTime: "2023-01-23T19:20Z",
    status: "active",
  },
  {
    id: 3,
    title: "App crashing on iphone 13",
    author: { name: "Aya Mohamed" },
    body: " cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum    varius duis at consectetur lorem donec massa sapien faucibus et    molestie ac feugiat sed lectus",
    date: "3d ago",
    dateTime: "2023-01-22T12:59Z",
    status: "resolved",
  },
  {
    id: 4,
    title: "How to cancel a service after ordering?",
    author: { name: "Khaled Ahmed" },
    body: " cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum    varius duis at consectetur lorem donec massa sapien faucibus et    molestie ac feugiat sed lectus",
    date: "5d ago",
    dateTime: "2023-01-20T10:04Z",
    status: "resolved",
  },
  {
    id: 5,
    title: "A problem with my last service",
    author: { name: "Ghada Mohamed" },
    body: " cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum    varius duis at consectetur lorem donec massa sapien faucibus et    molestie ac feugiat sed lectus",
    date: "5d ago",
    dateTime: "2023-01-20T20:12Z",
    status: "active",
  },
];

export default function List() {
  const [open, setOpen] = useState<boolean>(false);
  const header = "Users support tickets";

  return (
    <div>
      <Heading header={header} />
      <ul role="list" className="divide-y divide-gray-100">
        {issues.map((issue) => (
          <li
            key={issue.id}
            className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap"
          >
            <div>
              <p className="text-sm font-semibold leading-6 text-gray-900">
                <button
                  onClick={() => {
                    setOpen(true);
                  }}
                  className="hover:underline"
                >
                  {issue.title}
                </button>
              </p>
              <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                <p>
                  <span>{issue.author.name}</span>
                </p>
                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <p>
                  <time dateTime={issue.dateTime}>{issue.date}</time>
                </p>
              </div>
              <p className="text-sm mt-2">{issue.body}</p>
            </div>
            <dl className="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
              <div className="flex w-16 gap-x-2.5">
                <dt>
                  <span className="sr-only">Total comments</span>
                  {issue.status === "resolved" ? (
                    <CheckCircleIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  ) : (
                    <ClockIcon
                      className="h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  )}
                </dt>
              </div>
            </dl>
          </li>
        ))}
      </ul>
      <ModalBody open={open} setOpen={setOpen} />
    </div>
  );
}
