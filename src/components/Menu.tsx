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

        </div>
      </div>
    );  
            
}

export default Menu