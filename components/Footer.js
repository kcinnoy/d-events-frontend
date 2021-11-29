import styles from '@/styles/Footer.module.css';
import Link from 'next/link';
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
  } from 'semantic-ui-react'
  

export default function Footer() {
    return (
        //  <Menu inverted fixed='bottom' >
        //     {/* <Container>
        //         <Menu.Menu vertical>
        //             <Menu.Item>D-events</Menu.Item>
        //             <Menu.Item></Menu.Item>
        //             <Menu.Item> b</Menu.Item>
        //         </Menu.Menu>
        //         <Menu.Menu vertical>
        //             <Menu.Item>sdsgfhfffg f gf dsd</Menu.Item>
        //             <Menu.Item>sdsdsd</Menu.Item>
        //             <Menu.Item>sdsdsd</Menu.Item>
        //         </Menu.Menu>
        //         <Menu.Menu vertical>
        //             <Menu.Item>sdsdsd</Menu.Item>
        //             <Menu.Item>sdsdsd</Menu.Item>
        //             <Menu.Item>sdsdsd</Menu.Item>
        //         </Menu.Menu>
        //     </Container> */}
        //     /* {<Grid celled='internally' textAlign='center' >
        //         <Grid.Row>
        //             <Grid.Column width={5}  >
        //                 <List >
        //                     <List.Item> Home</List.Item>
        //                     <List.Item> Other</List.Item>
        //                     <List.Item> Another</List.Item>
        //                 </List>
        //             </Grid.Column>
        //             <Grid.Column width={6}>
        //                 <List >
        //                     <List.Item> Copyright &copy; D-events 2021</List.Item>
        //                     <List.Item> 
        //                         <Link href='/about'>
        //                             About This Project
        //                         </Link>
        //                     </List.Item>
        //                     <List.Item> Another</List.Item>
        //                 </List>
        //             </Grid.Column>
        //             <Grid.Column width={5}>
        //                 <List >
        //                     <List.Item> Home</List.Item>
        //                     <List.Item> Other</List.Item>
        //                     <List.Item> Another</List.Item>
        //                 </List>
        //             </Grid.Column>
        //         </Grid.Row>
        //     </Grid>
        // </Menu> 

        <div>
            <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 1' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 2' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 3' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Footer Header' />
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered size='mini' src='' />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>




    );
}
