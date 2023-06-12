export default function Heading({ header }: { header: string }) {
  return (
    <div className="mr-20 border-b border-gray-200 pb-3">
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        {header}
      </h3>
    </div>
  );
}
