import { useState } from 'react'

const MenuItems = ({item}) => {

    const [collapse, setCollapse] = useState(false);

    return (
        <>
            <li className="flex pb-3 justify-between pl-28 pr-5 items-end" onClick={ () => setCollapse(!collapse) }>
                <a className="font-semibold text-2xl font-normal uppercase">{item.name}</a>
                <item.icon className="h-8 w-8" aria-hidden="true" />
            </li>                          
            {
                collapse && 
                <li className="pb-3 justify-around items-start">
                    <ul>
                        {
                            item.links.map((link) => (
                                <li key={link.name} className="pl-36 pb-2 hover:bg-gray-300 active:bg-gray-300">
                                    <a href={link.href} className="text-2xl font-normal">{ link.name }</a>                                        
                                </li>
                            ))
                        }
                    </ul>
                </li>
            }
        </>
    )
}

export default MenuItems