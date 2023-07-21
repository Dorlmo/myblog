import { Ref } from "vue"

export interface rootMenuType {
    props: {
        mode: string,
        defaultActive: string,
    }
    activeIndex: Ref<string>,
    handleMenuItemClick: (item: {
        index: string,
        route?: string,
    }) => void
}