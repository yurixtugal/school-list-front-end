import Link from "next/link";

const Menu = () => {
    return (
      <div className="bg-white  border">
        <div className=" container flex justify-between py-6 mx-auto font-medium">
          <div className="flex gap-x-4 items-center">
            <Link href="/products">Productos</Link>
            <Link href="/schools">Colegios</Link>
            <Link href="/schoolLists">Listas escolares</Link>
            <Link href="/">Cotiza tu lista</Link>
          </div>
          <div className="flex gap-x-4 items-center">
            <Link href="/" className="border rounded-xl px-5 py-1">Login</Link>
            <Link href="/" className="border rounded-xl px-5 py-1 bg-blue-600">Sign Up</Link>
          </div>
        </div>
      </div>
    );  
            
}

export default Menu