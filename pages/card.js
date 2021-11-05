import Image from "next/image";
const FeedCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:items-center sm:space-y-0 sm:space-x-6">
      <div>
        {["Ellipse 1"].map((path) => {
          return (
            <div key={path}>
              <Image
                className="rounded-tr-md rounded-tl-md"
                src={`/${path}.jpg`}
                alt="pet"
                width="400"
                height="200"
              />
            </div>
          );
        })}
      </div>
      <div className="bg-white p-8 rounded-bl-md rounded-br-md">
        <h1 className="text-gray-1200">Exploring Maui </h1>
        <p className="text-sm text-gray-600 mt-4">
         
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          sed, itaque laborum assumenda, illo saepe illum officiis repellendus
          fuga nihil provident ea veritatis vel nostrum iure reprehenderit
          placeat consequatur incidunt.
        </p>
      </div>
      <div className="flex items-center mt-8">
        <div className="flex items-center">
          {["Ellipse 2"].map((path) => {
            return (
              <div key={path}>
                <Image
                  className="rounded-full"
                  src={`/${path}.png`}
                  alt="pet"
                  width="50"
                  height="50"
                />
              </div>
            );
          })}
        </div>
        <div className="ml-4">
          <p>Michell Appleton</p>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
