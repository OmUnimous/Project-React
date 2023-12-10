import ListGroup from "react-bootstrap/ListGroup";
export function News() {
  return (
    <>
      <h3>LATEST NEWS</h3>
      <ListGroup >
        <a href = "https://www.healthline.com/nutrition/10-ways-to-boost-metabolism" style={{ textDecoration: 'none ' }} className=" mt-3"><ListGroup.Item style = {borderStyle}>8 Ways That May Speed Up Your Metabolism</ListGroup.Item></a>
        <a href = "https://www.gennev.com/education/ditch-the-carbophobia-5-myths-busted" style={{ textDecoration: 'none ' }} className=" mt-3"><ListGroup.Item style = {borderStyle}>Ditch the Carbophobia: 5 Myths Busted  </ListGroup.Item></a>
        <a href = "https://www.medicalnewstoday.com/articles/322268" style={{ textDecoration: 'none' }}  className=" mt-3"><ListGroup.Item style = {borderStyle}>What are the benefits of eating healthy?</ListGroup.Item></a>
        <a href = "https://www.healthline.com/nutrition/10-ways-to-boost-metabolism" style={{ textDecoration: 'none' }} className=" mt-3"><ListGroup.Item style = {borderStyle}>8 Ways That May Speed Up Your Metabolism</ListGroup.Item></a>
        <a href = "https://www.health.harvard.edu/newsletter_article/why-we-should-exercise-and-why-we-dont" style={{ textDecoration: 'none' }} className=" mt-3"><ListGroup.Item style = {borderStyle}>Why we should exercise - and why we don't</ListGroup.Item></a>
      </ListGroup>
    </>
  );
}
const borderStyle = {
    border: "none",
    textAlign :"left" ,
    fontWeight: 'bold',
    textDecoration : 'none !important'
    
}