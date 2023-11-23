import React from 'react'

const Messages = () => {
    const Messages = [
        {
            user: "nikesh",
            Messages: "heloo i a nikesh chausdhary i your customer"
        },
        {
            user: "nikesh",
            Messages: "heloo i a nikesh chausdhary i your customer"
        },
        {
            user: "nikesh",
            Messages: "heloo i a nikesh chausdhary i your customer"
        },
    ]
    return (
        <>
            <div className='bg-slate-600 border p-4 rounded-md'>
                <div><p className='text-lg m-1 mb-4'>Messages</p></div>
                <div>
                    {
                        Messages.map((messsage) => (
                            <div className='mb-2 bg-slate-500 p-2 text-sm rounded-md'>
                                <p className='font-bold'>{messsage.user}</p>
                                <p>{messsage.Messages}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Messages