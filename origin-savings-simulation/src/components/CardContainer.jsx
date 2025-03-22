function CardContainer({ children }) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F4F8FA]">
        <div className="bg-white rounded-lg shadow-lg w-[560px] h-[511px] p-8">
          {children}
        </div>
      </div>
    );
  }
  
  export default CardContainer;
  