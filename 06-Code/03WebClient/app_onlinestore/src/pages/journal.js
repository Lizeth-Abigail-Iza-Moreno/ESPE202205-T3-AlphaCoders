//import '../css/App.css';
import 'styled-components'
import DataTable, { createTheme } from 'react-data-table-component';
import React, { useState, useEffect } from 'react';

const Journal = () => {
    const [journal, setJournals] = useState([])
    const URL = "https://api.plos.org/search?q=title:github"
    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setJournals(data)
    }
    useEffect(() => {
        showData()
    }, [])

    const columns = [
        {
            name: 'ID',
            selector: row => row.id
        },
        {
            name: "Journal",
            Selector: row => row.journal
        },
        {
            name: "Eissn",
            Selector: row => row.eissn
        },
        {
            name: "Publication Date",
            Selector: row => row.publication_date
        },
        {
            name: "Publication Date",
            Selector: row => row.publication_date
        },
        {
            name: "Article Type",
            Selector: row => row.article_type
        },
        {
            name: "Author Display",
            Selector: row => row.author_display
        },
        {
            name: "Title display",
            Selector: row => row.title_display
        },
        {
            name: "score",
            Selector: row => row.score
        },
    ]

      //personalizar temas
  createTheme('custom', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark');

    return (
        <div className="App">
            <DataTable
                columns={columns}
                data={journal}
                pagination
            />
        </div>
    );
}
export default Journal;