'use client'
import * as React from 'react';
import { Button, Stack, Paper, TextField, CircularProgress } from "@mui/material";
import Header from '@/components/header';
import Footer from '@/components/footer';
import SearchIcon from '@mui/icons-material/Search';
import ResultCard from '@/components/card';
import { ArrowLeft } from '@mui/icons-material';

export default function Home() {
  const [pagenum, setPagenum] = React.useState(0);
  const [querySent, setQuerySent] = React.useState(false);
  const [results, setResults] = React.useState<{ site: string; title: string; description: string; link: string; imageUrl: string; }[]>([]);
  const [query, setQuery] = React.useState<string>('');
  const [loading, setLoading] = React.useState(false);
  const apiKey = 'AIzaSyDXKeNt5pt8sFJ8o5a_vMskIU6cJ7FRIl8';

  React.useEffect(() => {
    if (querySent) {
      fetchResults();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagenum, querySent]);

  const fetchResults = async () => {
    setLoading(true);
    const response = await fetch(`https://customsearch.googleapis.com/customsearch/v1?key=${apiKey}&cx=752437097efb4468f&q=${query}&start=${pagenum * 10}`);
    const data = await response.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const results = data.items.map((result: any) => {
      return {
        site: result.displayLink,
        title: result.title,
        description: result.snippet,
        link: result.link,
      };
    });
    setResults(results || []);
    setQuerySent(results.length > 0);
    setLoading(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuerySent(false);
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const query = formJson.q;
    setQuery(query.toString());
    setResults([]);
    setPagenum(0);
    setQuerySent(true);
  };

  return (
    <Paper
      sx={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#080909',
      }}
    >
      <Header />
      {loading && (
        <CircularProgress sx={{ marginTop: 10, color: '#1c4020' }} />
      )}
      {!loading && (
        <>

          {!querySent && (
            <form onSubmit={handleSubmit}>
              <Stack spacing={1} direction="row" alignItems="center" width='75vw'>
                <TextField name="q" placeholder="What do you want to search for?" required fullWidth variant='outlined' size='small' hiddenLabel sx={{
                  backgroundColor: 'white',
                  borderRadius: '5px',
                  color: '#080909',
                }} />
                <Button type="submit" variant='contained' size="large" sx={{
                  backgroundColor: '#4338ca',
                  color: 'white',
                  borderRadius: '5px',
                  '&:hover': {
                    backgroundColor: '#185ea5',
                  }
                }}><SearchIcon /></Button>
              </Stack>
            </form>
          )
          }

          {
            querySent && results.length > 0 && (
              <>
                <Button
                  variant="contained"
                  aria-label="Back to Search Button"
                  onClick={() => {
                    window.location.reload();
                  }}
                  sx={{
                    marginTop: 2,
                    color: 'white',
                    backgroundColor: '#1c4020',
                    '&:hover': {
                      backgroundColor: '#1c3020',
                    }
                  }}
                >
                  <ArrowLeft />Back to Search
                </Button>
                <Stack spacing={-3} direction="column" sx={{ marginTop: 2 }}>
                  {results.map((result, index) => (
                    <ResultCard key={index} {...result} />
                  ))}
                </Stack>
              </>
            )
          }

          {
            querySent && (
              <Stack spacing={2} direction="row" sx={{ marginTop: 2, marginBottom: 4 }}>
                <Button
                  variant="contained"
                  aria-label="Previous Page Button"
                  onClick={() => {
                    if (pagenum > 0) {
                      setPagenum(pagenum - 1);
                    }
                  }}
                  disabled={pagenum === 0}
                  sx={{
                    marginTop: 2,
                    color: 'white',
                    backgroundColor: '#1c4020',
                    '&:hover': {
                      backgroundColor: '#1c3020',
                    },
                    '&:disabled': {
                      backgroundColor: '#1c2020',
                    }
                  }}
                >
                  Previous Page
                </Button>
                <Button
                  variant="contained"
                  aria-label="Next Page Button"
                  onClick={() => {
                    setPagenum(pagenum + 1);
                  }}
                  sx={{
                    marginTop: 2,
                    color: 'white',
                    backgroundColor: '#1c4020',
                    '&:hover': {
                      backgroundColor: '#1c3020',
                    }
                  }}
                >
                  Next Page
                </Button>
              </Stack>
            )
          }
        </>
      )}

      <Footer />
    </Paper >
  );
}
