/** @jsx jsx */
import { Box, Flex, Link, jsx } from 'theme-ui'

const Footer: React.FC = () => {
  return (
    <Box as="footer" variant="footer">
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` }
        }}
      >
        <img width="30" height="30" src="/logo.svg" alt="Hello Tham Logo" />
        {` `}
        <Link aria-label="Link to the theme's GitHub repository" sx={{ ml: 2 }} href="https://github.com/ChristineTham/gatsby-blog">
          Website
        </Link>
        <div sx={{ mx: 1, color: 'rosely2' }}>by</div>
        {` `}
        <Link aria-label="Link to the theme author's website" href="https://hellotham.com">
          Hello Tham Pty Ltd
        </Link>
      </Flex>
    </Box>
  )
}

export default Footer
