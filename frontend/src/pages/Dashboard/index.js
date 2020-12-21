import React, { useState } from "react"
import api from "../../services/api"
import useStyles from "../styles"
import { Button, Paper, TextField, Typography } from "@material-ui/core"
import FileBase from "react-file-base64"
import { useForm } from "react-hook-form"

export default function Dashboard() {
  // const [title, setTitle] = useState("")
  // const [description, setDescription] = useState("")
  // const [price, setPrice] = useState("")
  // const [thumbnail, setThumbnail] = useState("")
  // const [date, setDate] = useState("")
  const [postData, setPostData] = useState({ selectedFile: "" })
  const { register, handleSubmit } = useForm()

  const Submit = (evt) => {
    // console.log(evt, postData)
    // console.log(postData)
    let event = Object.assign(evt, postData)
    console.log(event)
  }

  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit(Submit)}
      >
        <Typography variant="h6">Creating an Event</Typography>
        <TextField
          name="sport"
          variant="outlined"
          inputRef={register}
          label="Sport"
          fullWidth
          // value={postData.creator}
          // onChange={(e) =>
          // setPostData({ ...postData, creator: e.target.value })
          // }
        />{" "}
        <TextField
          name="title"
          variant="outlined"
          inputRef={register}
          label="Title"
          fullWidth
          // value={postData.title}
          // onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />{" "}
        <TextField
          name="description"
          variant="outlined"
          inputRef={register}
          label="description"
          fullWidth
          // value={postData.message}
          // onChange={(e) =>
          // setPostData({ ...postData, message: e.target.value })
          // }
        />{" "}
        <TextField
          name="price"
          variant="outlined"
          inputRef={register}
          label="Event Price £0.00"
          fullWidth
          // value={postData.tags}
          // onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />{" "}
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            // name="file"
            multiple={false}
            // inputRef={register}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            type="submit"
            // onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </div>
      </form>
    </Paper>
  )
}
