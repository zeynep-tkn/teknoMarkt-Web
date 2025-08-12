import React from 'react'

const SideBrand = () => {
    return (
        <>
            <div className="flex justify-between mb-3">
                <div className="text-sky-900 font-semibold">Marka</div>
            </div>
            <div className="flex justify-between mb-3">
                <div className="text-sky-900">0 seçilmiş</div>
                <a href="#" className="text-sky-900 text-sm">Sıfırla</a>
            </div>
            <div className="flex justify-between items-center mb-3">
                <label className="flex items-center space-x-2">
                    <input id='ins' type="checkbox" className="h-6 w-6 rounded-md bg-slate-300 checked:bg-slate-700 focus:ring-0"
                    // checked={}
                    // onChange={} 
                    />
                    <label htmlFor='ins' className='ml-0 text-gray-800'>Stokta</label>
                </label>
                <div className="text-sky-900">5</div>
            </div>
            <div className="flex justify-between items-center mb-3">
                <label className="flex items-center space-x-2">
                    <input id='oos' type="checkbox" className="h-6 w-6 rounded-md bg-slate-100"
                    disabled
                    // checked={}
                    // onChange={} 
                    />
                    <label htmlFor='oos' className='ml-0 text-gray-300'>Stokta yok</label>
                </label>
                <div className="text-sky-900">0</div>
            </div>
        </>
    )
}

export default SideBrand