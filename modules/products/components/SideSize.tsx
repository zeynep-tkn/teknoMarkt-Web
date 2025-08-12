import React from 'react'
import { SIZE } from '@/common/constant/size'

export const SideSize = () => {
    return (
        <>
            <div className="flex justify-between mb-3">
                <div className="text-sky-900 font-semibold">Ebat</div>
            </div>
            <div className="flex justify-between mb-3">
                <div className="text-sky-900">0 seçilmiş</div>
                <a href="#" className="text-sky-900 text-sm">Sıfırla</a>
            </div>
            {SIZE.map((size, index) => (
                <div key={index} className="flex justify-between items-center mb-3">
                    <label className="flex items-center space-x-2">
                        <input id={size.name} type="checkbox" className="h-6 w-6 rounded-md bg-slate-300 checked:bg-slate-700 focus:ring-0"
                        // checked={}
                        // onChange={} 
                        />
                        <label htmlFor={size.name} className='ml-0 text-gray-800'>{size.name}</label>
                    </label>
                    <div className="text-sky-900">5</div>
                </div>
            ))}
        </>
    )
}
