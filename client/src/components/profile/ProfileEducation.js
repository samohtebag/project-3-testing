import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const ProfileEducation = ({ education : {
school, degree, fieldofstudy, current, to, from, description } 
}) => 
        <div>
            <h3 className="text-dark">{school}</h3>
            <p>
            <Moment format='DD/MM/YYY'>{from}</Moment> - {!to ? ' Now' : <Moment format='DD/MM/YYY'>{to}</Moment>}
            </p>
            <p>
            <strong>Degree: </strong> {degree}
        
            </p>
            <p>
            <strong>Field of Study: </strong> {fieldofstudy}
            </p>
            <p>
            <strong>Description: </strong> {description}
            </p>
            
        </div>

ProfileEducation.propTypes = {
    education: PropTypes.array.isRequired,

}

export default ProfileEducation
