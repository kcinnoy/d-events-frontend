
import { Item, Card, Button, Grid, List } from 'semantic-ui-react';
import Link from 'next/link';

export default function DashBoardEvent({evt, handleDelete}) {
    return (
        <Card fluid>
            <Card.Content>
            <Card.Header>
                <Link href={`/events/${evt.slug}`}>
                    <a>{evt.name}</a>
                </Link>
            </Card.Header>
            </Card.Content>
            <Card.Content>
            {/* <div className='ui two buttons'> */}
                <Link href={`/events/${evt.slug}`} passHref>
                    <Button size='tiny' as='a'>
                        View Event
                    </Button>
                </Link>
                <Link href={`/events/edit/${evt.id}`} passHref>
                    <Button size='tiny' as='a'>
                        Edit Event
                    </Button>
                </Link>
                <Button floated='right' color='red' size='tiny' onClick={() => handleDelete(evt.id)}>
                    Delete
                </Button>
        {/* </div> */}
            </Card.Content>
        </Card>
    )
}
