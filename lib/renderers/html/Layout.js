const Layout = ({ head, body, scripts }) => `
<html>

<head>
  <title>Coverage Report</title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.css" />
  <style>
    body {
      padding: 15px;
      height: 100vh;
    }
    header {
      height: 35px;
    }
  </style>

  ${head}
</head>

<body>
  <header>
    <a href='/'><h3>All files</h3></a>
  </header>
  <main>
    ${body}
  </main>
  ${scripts}
</body>

</html>
`

exports.Layout = Layout