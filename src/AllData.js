import { Card,CardHeader,CardMedia,CardContent,Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function AllData({apiData}){
console.log("alldata api is",apiData);
  return(
    <>
     <Container  sx={{ width:"100%"}}>
      <Typography sx={{textAlign:"center",paddingBottom:"50px"}} variant="h3">Api Datas</Typography>
        <Grid spacing={{ md: 10, xs: 2 }} p={2} container justifyContent="center" >
        {apiData?.map((item) => (
            <Grid item xs="8" md="4"  >
            
            <Card sx={{background: "#292929",color:"#FFFFFF",minHeight:"370px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}>
              <CardContent >
                <Typography variant="h4"> {item.id}</Typography>
                <br/>
                <Typography variant="h5"><span>TITLE:- </span>
                {item.title}
                </Typography><br/>
                <br />
                <Typography variant="body2" ><span>BODY:- </span>{item.body}</Typography>
              </CardContent>
            </Card>
          
          </Grid>
            ))}  
        </Grid>
    </Container>
    </>
  )
}


export default AllData;