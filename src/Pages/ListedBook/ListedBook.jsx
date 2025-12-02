import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBook from '../../Componenets/ReadBook/ReadBook';
export default function ListedBook() {
  return (
   <Tabs>
<TabList>
<Tab>Read Books </Tab>
<Tab>Wishlist Books</Tab>
</TabList>
<TabPanel>
<ReadBook></ReadBook>
</TabPanel>
<TabPanel>
<h2>Any content 2</h2>
</TabPanel>
</Tabs>
  )
}