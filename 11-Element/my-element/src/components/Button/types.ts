import type { PropType } from "vue";

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'large' | 'small'
export type NativeType = 'button' | 'submit' | 'reset'

export const buttonProps = {
    type: {
        type: String as PropType<ButtonType>
    },
    nativetype: {
        type: String as PropType<NativeType>,
        default: 'button'
    },
    size: {
        type: String as PropType<ButtonSize>,
    },
    plain: {
        type: Boolean
    },
    round: {
        type: Boolean
    },
    circle: {
        type: Boolean
    },
    disabled: {
        type: Boolean
    },
    autofocus: {
        type: Boolean
    }
}

export interface ButtonInstance {
    ref: HTMLButtonElement
}

// export interface ButtonProps {
//     type?: ButtonType;
//     size?: ButtonSize;
//     plain?: boolean;
//     round?: boolean;
//     circle?: boolean;
//     disabled?: boolean;
// }