import {
    Page,
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    List,
    Icon,
    ListInput,
    Button,
    f7
} from 'framework7-react';
import { FormEvent, useState } from 'react';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const aksiSignin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email === 'admin@taxify.com' && password === '123456') {
            f7.notification.create({
                icon: '<i class="icon icon-f7"></i>',
                title: 'Taxify Notification',
                titleRightText: 'now',
                subtitle: 'Login Berhasil',
                text: 'Tunggu beberapa saat, kamu akan diarahkan ke halaman admin',
                closeTimeout: 2000,
              });
        } else {
            f7.notification.create({
                icon: '<i class="icon icon-f7"></i>',
                title: 'Taxify Notification',
                titleRightText: 'now',
                subtitle: 'Gagal Login',
                text: 'Periksa email dan password anda',
                closeTimeout: 2000,
              });
        }
    };

    return (
        <Page>
          
                <Card>
                    <CardHeader>sasa</CardHeader>
                    <CardContent>
                        <form onSubmit={(e) => aksiSignin(e)}>
                            <List strongIos dividersIos insetIos>
                                <ListInput
                                    label="Email"
                                    floatingLabel
                                    type="email"
                                    placeholder="Enter email ..."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    clearButton>
                                    <Icon icon="demo-list-icon" slot="media" />
                                </ListInput>
                                <ListInput
                                    label="Password"
                                    floatingLabel
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password ..."
                                >
                                    <Icon icon="demo-list-icon" slot="media" />
                                </ListInput>
                            </List>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <Button fill raised>Sign In</Button>
                    </CardFooter>
                </Card>
 
        </Page>
    );
};

export default Signin;