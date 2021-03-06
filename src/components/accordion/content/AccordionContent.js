import React, { Fragment } from 'react'
// style
import { AcrdText, AcrdContent } from 'styles/accordions'
// prop types
import PropTypes from 'prop-types'
// theme consumer hoc
import withThemeConsumer from 'hoc/withThemeConsumer'

const AccordionContent = ({ text, isActive, context }) => (
  <Fragment>
    {isActive && (
      <AcrdContent background={context.theme.background} color={context.theme.color}>
        <AcrdText color={context.theme.color}>{text}</AcrdText>
        <AcrdText>
          {
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eos maiores, fugiat suscipit ab id quia unde maxime ad.'
          }
        </AcrdText>
      </AcrdContent>
    )}
  </Fragment>
)

AccordionContent.propTypes = {
  isActive: PropTypes.bool.isRequired,
  text: PropTypes.string
}

export default withThemeConsumer(AccordionContent)
