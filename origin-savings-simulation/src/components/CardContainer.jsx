function CardContainer({ children }) {
  return (
    <div className="card-container px-4">
      <div className="card-wrapper w-full max-w-[560px]">
        {children}
      </div>
    </div>
  );
}

export default CardContainer;
