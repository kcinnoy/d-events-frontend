import Link from 'next/link';
import { Button } from 'semantic-ui-react';
import {PER_PAGE} from '@/config/index';


export default function Pagination({page, total}) {
    const lastPage = Math.ceil(total/PER_PAGE)

    return (
        <>
            {page > 1 && (
                <Link href ={`/events?page=${page - 1}`}>
                    <Button>Prev</Button>
                </Link>
            )}

            {page < lastPage && (
                <Link href ={`/events?page=${page + 1}`}>
                    <Button>Next</Button>
                </Link>
            )}
        </>
    )
}
