import { Stack } from '@mui/material';


function Home(){
    return(
        <div>
            <h1>歡迎</h1>
            <Stack direction="row" spacing={1} alignItems={'center'}>
                <p>Welcome | </p>
                <p>ようこそ | </p>
                <p>어서 오세요</p>
            </Stack>
        </div>
    )
}

export default Home;