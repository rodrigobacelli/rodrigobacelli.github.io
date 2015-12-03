import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

//Creates DevTools Sidebar Component
export default createDevTools(
    <DockMonitor toggleVisibilityKey="H"
                 changePositionKey="Y">
        <LogMonitor />
    </DockMonitor>
)
