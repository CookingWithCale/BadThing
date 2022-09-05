import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import "./TriggerWordCard.css"

type TriggerWordCardState = "loading" | "error" | "ready"

const TriggerWordCardContainer: React.FC<{
    children: React.ReactNode
    on_delete?: () => void
  }> = ({ children, on_delete }) => {
  return (<Card>
      <Box mx='4px' my='16px'>
        <CardContent>
          {children}
        </CardContent>
        <CardActions>
          {
            on_delete && (
              <Button color="secondary" onClick={on_delete}>
                <Typography className="weatherCard-body">Delete</Typography>
              </Button>
            )
          }
        </CardActions>
      </Box>
    </Card>)
}

const TriggerWordCard: React.FC<{
  trigger_word: string,
  on_delete?: () => void
}> = ({ trigger_word, on_delete }) => {
  const [card_state, set_card_state] = useState<TriggerWordCardState>("loading")

  return (
    <TriggerWordCardContainer on_delete={on_delete}>
      <Typography variant="h3">{trigger_word}</Typography>
    </TriggerWordCardContainer>)
}

export default TriggerWordCard
