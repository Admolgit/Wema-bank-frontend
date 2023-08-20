// customToast.js
import { toast } from 'react-toastify';
import { css } from 'glamor';

export const customToast = {
  success(msg, options = {}) {
    return toast.success(msg, {
      ...options,
      className:
        'text-[#8C53FD] bg-[#ffffff] text-[14px] rounded-[8px] border-1 border-[#8C53FD] toast-success-container-after',
      progressClassName: css({
        background: '#8C53FD',
      }),
    });
  },
  error(msg, options = {}) {
    return toast.error(msg, {
      ...options,
      className:
        'text-[red] bg-[#ffffff] text-[14px] rounded-[8px] border-1 toast-error-container-after',
      progressClassName: css({
        background: '#EE0022',
      }),
    });
  },
  info(msg, options = {}) {
    return toast.info(msg, {
      ...options,
      className:
        'text-[#8C53FD] text-[14px] bg-[#ffffff] rounded-[8px] border-1 border-[#8C53FD] toast-info-container-after',
      progressClassName: css({
        background: '#8C53FD',
        
      }),
    });
  },
};
