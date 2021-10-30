import React from 'react'
import {render} from '@testing-library/react'

const HelloWorld = () => <h1>Hello World</h1>
const {debug} = render(<HelloWorld />)
debug()


