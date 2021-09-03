import Table from "./CustomTable/CustomTable";
import Card from "./Card/Card.js";
import CardHeader from "./Card/CardHeader.js";
import CardBody from "./Card/CardBody.js";
import { makeStyles } from "@material-ui/core/styles";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

function CustomTable({ rows, headers }) {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Recommendations</h4>
      </CardHeader>
      <CardBody>
        <Table
          tableHeaderColor="primary"
          tableHead={headers}
          tableData={rows}
        />
      </CardBody>
    </Card>
  );
}
export default CustomTable;
