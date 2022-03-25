import {Button, notification, Modal, Tooltip} from 'antd';
import {QuestionCircleOutlined, FileExcelOutlined} from '@ant-design/icons';
import React from 'react';

/**
 * Fonction permettant de générer une tooltip d'aide pour les inputs
 *
 * @param message
 * @param placement
 */
export function helpTooltipInput(message, placement = 'topRight') {
  return (
    <Tooltip placement={placement} title={message}>
      <QuestionCircleOutlined />
    </Tooltip>
  );
}