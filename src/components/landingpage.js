import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>مُـــــنـــــى لمشاركة السير الذاتية </h1>
         <h1>سيرتـك بوابة الوصــول إليك </h1>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;