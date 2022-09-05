import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography
} from '@material-ui/core'
import "./Options.css"
import {
  LocalStorageOptions,
  StoredOptionsGet,
  StoredOptionsSet,
} from "../Storage"

/*import Parser from 'rss-parser';

type CustomFeed = {foo: string};
type CustomItem = {bar: number};

const parser: Parser<CustomFeed, CustomItem> = new Parser({
  customFields: {
    feed: ['foo'],
    item: ['bar']
  }
});

(async () => {

  const feed = await parser.parseURL('https://www.reddit.com/.rss');
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });
})();*/

const App: React.FC<{}> = () => {
  const [options, set_options] = useState<LocalStorageOptions | null>(null)

  useEffect(() => {
    StoredOptionsGet().then((options) => set_options(options))
  }, [])
  
  if (!options) return null

  return (
    <Box mx="10%" my="2%">
      <Card>
        <CardContent>
          <Grid container direction="column" spacing={4}>
            <Grid item>
              <Typography variant='h2'>Options</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Foo</Typography>
              <TextField fullWidth placeholder="Enter foo..." value="{options.city_home}" />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">Save</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)
