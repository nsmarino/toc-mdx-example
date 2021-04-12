import Link from 'next/link'
import { useRouter } from 'next/router'
import slugify from '../utils/slugify'
import useActiveId from '../hooks/useActiveId'

const LinkInTOC = ({heading, active}) => {
  const { query } = useRouter()
  const slug = slugify(heading)

  return (
    <div style={active===slug ? {color: 'red'} : {color: 'black'}}>
      <Link href={`/blog/${query.id}#${slugify(heading)}`}>{heading}</Link>
    </div>  
  )
}

const TOC = ({headings}) => {
  const headingIds = headings.map(heading=>slugify(heading))
  const activeId = useActiveId(headingIds)

  return (
    <nav style={{position: 'fixed', top: '25px', background: 'white'}}>
      {headings.map(h=> 
        <LinkInTOC 
          heading={h} 
          key={h} 
          active={activeId}
        />
      )}
    </nav>
  )
}

export default TOC