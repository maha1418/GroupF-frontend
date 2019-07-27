import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class AboutUs extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2> F مجموعة</h2>
            
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>مُـــــــنـــــــى
             <br/>
             مـيـم : مـهـا , نــون :نــوف , أ: أمـجــاد
             <br/>
             أصبحنـا مُــنــى لأجل رغبـتك المـرجوة وأمـنيتك المـراد تحقيقـها 
             </p>

          </Cell>
          <Cell col={6}>
            <h2>تواصل معنا</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    0541143290
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (016) 333-7316
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    kaak55@yahoo.com
                  </ListItemContent>
                </ListItem>

                


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default AboutUs;