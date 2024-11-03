export default function MdxLayout({ children }) {
    return (
      <div className="grid grid-cols-1 gap-5 leading-5">
        {children}
      </div>
    );
  }