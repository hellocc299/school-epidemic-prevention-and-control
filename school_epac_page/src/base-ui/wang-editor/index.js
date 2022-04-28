import '@wangeditor/editor/dist/css/style.css'
import React, { memo, useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import {EditorWrapper} from './style'

const CCEditor = memo(() => {
  const [editor, setEditor] = useState(null) // 存储 editor 实例
  const [html, setHtml] = useState('') // 编辑器内容

  const toolbarConfig = { }
  const editorConfig = {
      placeholder: '请输入内容',
  }

  // 及时销毁 editor
  useEffect(() => {
      return () => {
          if (editor == null) return
          editor.destroy()
          setEditor(null)
      }
  }, [editor])

  return (
    <EditorWrapper>
      <div style={{ border: '1px solid #ccc', zIndex: 100}} name="content">
          <Toolbar
            editor={editor}
            defaultConfig={toolbarConfig}
            mode="default"
            style={{ borderBottom: '1px solid #ccc' }}
          />
          <Editor
            defaultConfig={editorConfig}
            onCreated={editor => setEditor(editor)}
            value={html}
            onChange={editor => setHtml(editor.getHtml())}
            mode="default"
            style={{ height: '500px', 'overflowY': 'hidden' }}
          />
      </div>
    </EditorWrapper>
  )
})

export default CCEditor