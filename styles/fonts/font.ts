import localFont from 'next/font/local';
const rebond = localFont({
  src: [
    {
      path: './Rebond Grotesque.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Rebond Grotesque Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Rebond Grotesque Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Rebond Grotesque Bold Italic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './Rebond Grotesque Light.otf',
      weight: '700',
      style: 'italic',
    },
  ],
});

export default rebond;
