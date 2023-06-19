import Property from "./Property";

const PropertyList = ({ properties }) => {
  const divStyle = {
    display: "flex",
    // alignItems: "center",
    // justifyContent: "space-around",
    // flexFlow: "flex-column",
  };

  return (
    <div style={divStyle}>
      {properties.map((property) => (
        <Property
          key={property.id}
          name={property.name}
          price={property.price}
          rating={property.rating}
        />
      ))}
    </div>
  );
};

export default PropertyList;
