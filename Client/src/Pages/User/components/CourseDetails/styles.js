const styles = {
  card: (theme) => ({
    marginTop: '44px',
    padding: '48px 24px',
    border: '1px solid #E7E7E7',
    borderRadius: '4px',
    boxSizing: 'border-box',
    boxShadow: 'none',
    width: '508px',
    [theme.breakpoints.up('lg')]: {
      marginTop: 0,
    },
  }),
  title: {
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '29px',
    textTransform: 'capitalize',
  },
  btnExpand: {
    background: 'none',
    color: '#673F86',
    '&:hover': {
      background: 'none',
    },
  },
  titleLesson: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '24px',
  },
  blockTopic: {
    padding: '14px 24px',
    display: 'flex',
    alignItems: 'center',
    color: '#673F86',
    textTransform: 'capitalize',
  },
  basicTopicLesson: {
    display: 'flex',
    alignItems: 'center',
    background: '#E7E7E7',
    borderRadius: '8px',
    padding: '18px',
  },
  expand: {
    width: '24px',
    height: '24px',
    marginRight: '14px',
    background: '#673F86',
    borderRadius: '50%',
  },
  lessonNumber: {
    fontSize: '20px',
    lineHeight: '24px',
    color: '#000000',
    textTransform: 'capitalize',
  },
}

export default styles
