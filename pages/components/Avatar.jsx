function Avatar({img, name}) {
  return (
    <img
      className="Avatar"
      src={img}
        alt={name}
    />
  );
}

module.exports = Avatar;