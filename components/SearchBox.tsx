import { useState } from "react";
import { Input } from '@chakra-ui/react'
export interface SearchBoxProps {}

export const SearchBox = () => {
    const [value, setValue] = useState("");
    return  (
        <form
            onSubmit={e => {
                e.preventDefault();
                setValue("");
            }}
        >
            <div>
            <Input variant='flushed' value={value} placeholder='Title, Tags'/>
            <button type="submit">Search</button>
            </div>
        </form>
    )
}

// const getStaticPaths = async () => {
//     const posts = fs.readdirSync(path.join('content', 'blogs))
