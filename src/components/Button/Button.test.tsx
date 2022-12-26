import { Button } from './Button'
import { render, screen, renderHook } from '@testing-library/react'

describe('Button', () => {
  beforeEach(() => {
    render(
      <Button
        content={'content'}
        active={true}
        handleClick={() => console.log('click!')}
        theme={'primary'}
      />
    )
  })

  test('should render component', () => {
    expect(screen.getByText(/content/i)).toBeDefined()
  })

  test('should have the props `content` and `active`', () => {
    const { result, rerender } = renderHook((props: unknown = {}) => props, {
      initialProps: {
        content: 'content',
        active: true,
      },
    })

    expect(result.current).toEqual({
      content: 'content',
      active: true,
    })
    rerender()
    expect(result.current).toEqual({
      content: undefined,
      active: undefined,
    })
  })
})
