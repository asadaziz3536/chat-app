<script>
import ActionDropdown from "../../atoms/ActionDropdown.vue";
import CircledIconBtn from "../../atoms/CircledIconBtn.vue";
import IconBtn from "../../atoms/IconBtn.vue";
// Emoji picker component
import EmojiPicker from "vue3-emoji-picker";
// Emoji picker css
import "vue3-emoji-picker/css";
export default {
  components: { CircledIconBtn, IconBtn, EmojiPicker, ActionDropdown },
  data() {
    return {
      BoldSvg:
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M15.4062 19.625H9.625V8.375H14.9375C15.5639 8.37504 16.1771 8.55435 16.7048 8.89174C17.2325 9.22914 17.6526 9.71052 17.9155 10.279C18.1784 10.8475 18.2731 11.4794 18.1884 12.1C18.1037 12.7206 17.8431 13.304 17.4375 13.7812C17.9673 14.205 18.3528 14.7825 18.5408 15.4344C18.7289 16.0862 18.7102 16.7803 18.4875 17.4211C18.2647 18.0619 17.8488 18.6179 17.297 19.0126C16.7452 19.4073 16.0847 19.6213 15.4062 19.625ZM11.5 17.75H15.3937C15.5784 17.75 15.7613 17.7136 15.9319 17.643C16.1025 17.5723 16.2575 17.4687 16.3881 17.3381C16.5187 17.2075 16.6223 17.0525 16.693 16.8819C16.7636 16.7113 16.8 16.5284 16.8 16.3438C16.8 16.1591 16.7636 15.9762 16.693 15.8056C16.6223 15.635 16.5187 15.48 16.3881 15.3494C16.2575 15.2188 16.1025 15.1152 15.9319 15.0445C15.7613 14.9739 15.5784 14.9375 15.3937 14.9375H11.5V17.75ZM11.5 13.0625H14.9375C15.1222 13.0625 15.305 13.0261 15.4756 12.9555C15.6463 12.8848 15.8013 12.7812 15.9319 12.6506C16.0625 12.52 16.166 12.365 16.2367 12.1944C16.3074 12.0238 16.3438 11.8409 16.3438 11.6562C16.3438 11.4716 16.3074 11.2887 16.2367 11.1181C16.166 10.9475 16.0625 10.7925 15.9319 10.6619C15.8013 10.5313 15.6463 10.4277 15.4756 10.357C15.305 10.2864 15.1222 10.25 14.9375 10.25H11.5V13.0625Z" fill="#5F6269"/></svg>',

      ItalicSvg:
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M19.625 9.625V8.375H11.5V9.625H14.7125L11.9813 18.375H8.375V19.625H16.5V18.375H13.2875L16.0187 9.625H19.625Z" fill="#5F6269"/></svg>',
      SymbolSvg:
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M21.5 13.375H15.2225C14.945 13.3004 14.6662 13.2306 14.3863 13.1656C12.6312 12.7506 11.6388 12.4469 11.6388 11.0263C11.6245 10.781 11.6608 10.5355 11.7454 10.3049C11.83 10.0742 11.9612 9.86347 12.1306 9.68564C12.6615 9.24908 13.3264 9.00852 14.0137 9.00439C15.7825 8.96064 16.5981 9.56064 17.265 10.4731L18.2744 9.73564C17.8019 9.05711 17.1578 8.51617 16.4078 8.16808C15.6578 7.81999 14.8288 7.67723 14.0056 7.75439C12.9944 7.76085 12.0189 8.12911 11.2556 8.79252C10.9663 9.08595 10.7402 9.43554 10.5913 9.81971C10.4423 10.2039 10.3736 10.6145 10.3894 11.0263C10.362 11.4768 10.4466 11.9271 10.6357 12.337C10.8248 12.7469 11.1125 13.1035 11.4731 13.375H6.5V14.625H15.0325C16.2619 14.9813 16.9969 15.445 17.0156 16.7238C17.0359 16.9969 16.9985 17.2713 16.9056 17.529C16.8128 17.7867 16.6667 18.0219 16.4769 18.2194C15.8155 18.7407 14.9938 19.0166 14.1519 19C13.5234 18.9818 12.9074 18.8209 12.3503 18.5296C11.7932 18.2382 11.3097 17.8239 10.9362 17.3181L9.97812 18.1206C10.4636 18.7676 11.0899 19.2955 11.8097 19.6645C12.5295 20.0334 13.3238 20.2336 14.1325 20.25H14.195C15.3492 20.2633 16.4695 19.8596 17.35 19.1131C17.6625 18.7981 17.9054 18.421 18.0632 18.0062C18.2209 17.5914 18.2898 17.1481 18.2656 16.705C18.289 15.947 18.0332 15.2069 17.5469 14.625H21.5V13.375Z" fill="#5F6269"/></svg>',

      ASvg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M22.3988 14.3575L17.4081 9.36625C17.1736 9.13187 16.8556 9.00021 16.5241 9.00021C16.1925 9.00021 15.8745 9.13187 15.64 9.36625L12.2912 12.715L9.625 5.25H8.375L5.25 14H6.5L7.12438 12.125H10.8744L11.3763 13.63L6.86625 18.14C6.75012 18.2561 6.658 18.3939 6.59515 18.5456C6.5323 18.6973 6.49995 18.8599 6.49995 19.0241C6.49995 19.1883 6.5323 19.3508 6.59515 19.5025C6.658 19.6542 6.75012 19.792 6.86625 19.9081L9.7075 22.75H15.7013L22.3988 16.0519C22.5101 15.9406 22.5984 15.8085 22.6587 15.6631C22.719 15.5177 22.75 15.3618 22.75 15.2044C22.75 15.047 22.719 14.8911 22.6587 14.7457C22.5984 14.6003 22.5101 14.4681 22.3988 14.3569V14.3575ZM7.54063 10.875L8.9975 6.5L10.4575 10.875H7.54063ZM15.1844 21.5H10.225L7.75 19.0238L11.695 15.0794L16.65 20.0337L15.1844 21.5ZM17.5344 19.15L12.5794 14.1956L16.5244 10.25L21.4788 15.2044L17.5344 19.15Z" fill="#5F6269"/></svg>',
      Smiley:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_308_474)"><path d="M10.102 11.7353C10.632 11.7353 11.0613 11.1493 11.0613 10.4273C11.0613 9.70534 10.632 9.11934 10.102 9.11934C9.57201 9.11934 9.14267 9.70534 9.14267 10.4273C9.14267 11.1493 9.57201 11.7353 10.102 11.7353ZM7.96601 12.6433C7.94867 12.4387 7.87868 16.122 12.008 16.344C16.052 16.1773 16.052 12.6433 16.052 12.6433C12 13.5873 7.96601 12.6433 7.96601 12.6433ZM15.5413 13.382C15.5413 13.382 15.0953 14.688 12.174 14.688C9.83734 14.688 8.58201 13.912 8.43601 13.382C8.43601 13.382 12.3773 14.0853 15.5413 13.382ZM11.8693 4.67401C7.73934 4.67401 4.65201 8.02201 4.65201 12.152C4.65201 16.282 7.86934 19.326 11.9993 19.326C16.1293 19.326 19.3467 16.282 19.3467 12.152C19.3473 8.02201 15.9993 4.67401 11.8693 4.67401ZM12 18.236C8.48468 18.236 5.74601 15.6453 5.74601 12.13C5.74601 8.61468 8.37401 5.76468 11.8893 5.76468C15.4047 5.76468 18.2547 8.61468 18.2547 12.13C18.254 15.6447 15.5153 18.236 12 18.236ZM14.072 11.7353C14.602 11.7353 15.0313 11.1493 15.0313 10.4273C15.0313 9.70534 14.602 9.11934 14.072 9.11934C13.542 9.11934 13.1127 9.70534 13.1127 10.4273C13.1127 11.1493 13.542 11.7353 14.072 11.7353Z" fill="#5F6269"/></g><defs><clipPath id="clip0_308_474"><rect width="16" height="16" fill="white" transform="translate(4 4)"/></clipPath></defs></svg>',
      LinkSvg:
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M22.2813 8.22503C21.9329 7.87543 21.5189 7.59804 21.0631 7.40877C20.6073 7.2195 20.1186 7.12207 19.625 7.12207C19.1315 7.12207 18.6428 7.2195 18.1869 7.40877C17.7311 7.59804 17.3171 7.87543 16.9688 8.22503L17.8563 9.11253C18.0889 8.87984 18.3652 8.69526 18.6692 8.56934C18.9732 8.44341 19.2991 8.37859 19.6281 8.37859C19.9572 8.37859 20.283 8.44341 20.5871 8.56934C20.8911 8.69526 21.1673 8.87984 21.4 9.11253C21.6327 9.34521 21.8173 9.62145 21.9432 9.92547C22.0691 10.2295 22.1339 10.5553 22.1339 10.8844C22.1339 11.2135 22.0691 11.5393 21.9432 11.8433C21.8173 12.1474 21.6327 12.4236 21.4 12.6563L16.4 17.6563C15.9309 18.1262 15.2943 18.3905 14.6303 18.3911C13.9663 18.3917 13.3293 18.1285 12.8594 17.6594C12.3895 17.1903 12.1251 16.5537 12.1245 15.8897C12.124 15.2257 12.3872 14.5887 12.8563 14.1188L13.7375 13.2313L12.8563 12.3438L11.9688 13.2313C11.6192 13.5797 11.3418 13.9936 11.1525 14.4495C10.9632 14.9053 10.8658 15.394 10.8658 15.8875C10.8658 16.3811 10.9632 16.8698 11.1525 17.3256C11.3418 17.7814 11.6192 18.1954 11.9688 18.5438C12.6759 19.2419 13.6313 19.6308 14.625 19.625C15.1205 19.6271 15.6114 19.5309 16.0695 19.3421C16.5275 19.1533 16.9436 18.8756 17.2938 18.525L22.2938 13.525C22.9944 12.8202 23.3866 11.8662 23.3842 10.8724C23.3819 9.87869 22.9852 8.9265 22.2813 8.22503Z" fill="#5F6269"/><path d="M6.61876 19.5125C6.38538 19.2802 6.20019 19.0041 6.07383 18.7C5.94746 18.396 5.88241 18.0699 5.88241 17.7407C5.88241 17.4114 5.94746 17.0853 6.07383 16.7813C6.20019 16.4772 6.38538 16.2011 6.61876 15.9688L11.6188 10.9688C11.8511 10.7354 12.1272 10.5502 12.4312 10.4238C12.7353 10.2975 13.0614 10.2324 13.3906 10.2324C13.7199 10.2324 14.046 10.2975 14.35 10.4238C14.6541 10.5502 14.9302 10.7354 15.1625 10.9688C15.3944 11.2029 15.577 11.4812 15.6994 11.7872C15.8217 12.0931 15.8815 12.4206 15.875 12.75C15.8769 13.0805 15.8133 13.4081 15.6878 13.7139C15.5622 14.0196 15.3773 14.2974 15.1438 14.5313L13.8188 15.875L14.7063 16.7625L16.0313 15.4375C16.7366 14.7322 17.1328 13.7756 17.1328 12.7782C17.1328 11.7807 16.7366 10.8241 16.0313 10.1188C15.326 9.41347 14.3693 9.01723 13.3719 9.01723C12.3744 9.01723 11.4178 9.41347 10.7125 10.1188L5.71251 15.1188C5.36197 15.4673 5.08379 15.8816 4.89396 16.338C4.70414 16.7944 4.60641 17.2839 4.60641 17.7782C4.60641 18.2725 4.70414 18.7619 4.89396 19.2183C5.08379 19.6747 5.36197 20.089 5.71251 20.4375C6.42428 21.1303 7.38182 21.5124 8.37501 21.5C9.37695 21.501 10.3386 21.1055 11.05 20.4L10.1625 19.5125C9.93022 19.7459 9.6541 19.9311 9.35003 20.0575C9.04596 20.1838 8.71992 20.2489 8.39064 20.2489C8.06135 20.2489 7.73531 20.1838 7.43124 20.0575C7.12717 19.9311 6.85106 19.7459 6.61876 19.5125Z" fill="#5F6269"/></svg>',
      ImgSvg:
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M15.875 12.75C16.2458 12.75 16.6084 12.64 16.9167 12.434C17.225 12.228 17.4654 11.9351 17.6073 11.5925C17.7492 11.2499 17.7863 10.8729 17.714 10.5092C17.6416 10.1455 17.463 9.8114 17.2008 9.54917C16.9386 9.28695 16.6045 9.10837 16.2408 9.03603C15.8771 8.96368 15.5001 9.00081 15.1575 9.14273C14.8149 9.28464 14.522 9.52496 14.316 9.83331C14.11 10.1416 14 10.5042 14 10.875C14 11.3723 14.1975 11.8492 14.5492 12.2008C14.9008 12.5525 15.3777 12.75 15.875 12.75ZM15.875 10.25C15.9986 10.25 16.1195 10.2867 16.2222 10.3553C16.325 10.424 16.4051 10.5216 16.4524 10.6358C16.4997 10.75 16.5121 10.8757 16.488 10.9969C16.4639 11.1182 16.4044 11.2295 16.3169 11.3169C16.2295 11.4043 16.1182 11.4639 15.9969 11.488C15.8757 11.5121 15.75 11.4997 15.6358 11.4524C15.5216 11.4051 15.424 11.325 15.3553 11.2222C15.2867 11.1195 15.25 10.9986 15.25 10.875C15.25 10.7092 15.3158 10.5503 15.4331 10.4331C15.5503 10.3158 15.7092 10.25 15.875 10.25Z" fill="#5F6269"/><path d="M20.25 6.5H7.75C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75V20.25C6.5 20.5815 6.6317 20.8995 6.86612 21.1339C7.10054 21.3683 7.41848 21.5 7.75 21.5H20.25C20.5815 21.5 20.8995 21.3683 21.1339 21.1339C21.3683 20.8995 21.5 20.5815 21.5 20.25V7.75C21.5 7.41848 21.3683 7.10054 21.1339 6.86612C20.8995 6.6317 20.5815 6.5 20.25 6.5ZM20.25 20.25H7.75V16.5L10.875 13.375L14.3688 16.8687C14.603 17.1016 14.9198 17.2322 15.25 17.2322C15.5802 17.2322 15.897 17.1016 16.1313 16.8687L17.125 15.875L20.25 19V20.25ZM20.25 17.2312L18.0063 14.9875C17.772 14.7547 17.4552 14.624 17.125 14.624C16.7948 14.624 16.478 14.7547 16.2437 14.9875L15.25 15.9812L11.7562 12.4875C11.522 12.2547 11.2052 12.124 10.875 12.124C10.5448 12.124 10.228 12.2547 9.99375 12.4875L7.75 14.7312V7.75H20.25V17.2312Z" fill="#5F6269"/></svg>',
      VideoSvg:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 14.5996L17.191 11.9996L20 9.40057V14.5996ZM15 15.9996C15 16.5516 14.552 16.9996 14 16.9996H5C4.448 16.9996 4 16.5516 4 15.9996V7.99957C4 7.44857 4.448 6.99957 5 6.99957H14C14.552 6.99957 15 7.44857 15 7.99957V15.9996ZM21.012 7.14557C20.386 6.87257 19.66 6.99157 19.161 7.45157L17 9.45157V7.99957C17 6.34557 15.654 4.99957 14 4.99957H5C3.346 4.99957 2 6.34557 2 7.99957V15.9996C2 17.6546 3.346 18.9996 5 18.9996H14C15.654 18.9996 17 17.6546 17 15.9996V14.5486L19.161 16.5476C19.481 16.8446 19.896 16.9996 20.319 16.9996C20.553 16.9996 20.788 16.9526 21.012 16.8546C21.621 16.5886 22 16.0196 22 15.3706V8.62957C22 7.98057 21.621 7.41157 21.012 7.14557Z" fill="#5F6269"/></svg>',
      ShareCard:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_308_497)"><path d="M7.76467 6.17647V5.11558C7.76467 3.94597 8.71138 3 9.88373 3H17.2927C18.462 3 19.4117 3.94903 19.4117 5.11594V15.7076C19.4117 16.8773 18.465 17.8235 17.2927 17.8235H16.2352V18.884C16.2352 20.0538 15.2886 21 14.1162 21H6.70725C5.53764 21 4.5882 20.0519 4.5882 18.8844V8.29205C4.5882 7.12244 5.53491 6.17647 6.70725 6.17647H7.76467ZM15.1764 18.884V8.29241C15.1764 7.71044 14.7009 7.23529 14.1162 7.23529H6.70725C6.11949 7.23529 5.64701 7.70738 5.64701 8.29205V18.8844C5.64701 19.4668 6.12208 19.9412 6.70725 19.9412H14.1162C14.704 19.9412 15.1764 19.4689 15.1764 18.884ZM16.2353 16.7647H17.2927C17.8804 16.7647 18.3529 16.2925 18.3529 15.7076V5.11594C18.3529 4.53397 17.8774 4.05881 17.2927 4.05881H9.88373C9.29596 4.05881 8.82351 4.53094 8.82351 5.11558V6.17647H14.1162C15.2855 6.17647 16.2353 7.1255 16.2353 8.29241V16.7647ZM10.4117 14.1176C9.096 14.1176 8.02937 13.051 8.02937 11.7353C8.02937 10.4195 9.096 9.35292 10.4117 9.35292C11.7275 9.35292 12.7941 10.4195 12.7941 11.7353C12.7941 13.051 11.7275 14.1176 10.4117 14.1176ZM10.4117 13.0588C11.1427 13.0588 11.7353 12.4663 11.7353 11.7353C11.7353 11.0043 11.1427 10.4118 10.4117 10.4118C9.68079 10.4118 9.08822 11.0044 9.08822 11.7353C9.08822 12.4663 9.68076 13.0588 10.4117 13.0588ZM7.76467 16.2353C7.47228 16.2353 7.23526 15.9983 7.23526 15.7059C7.23526 15.4135 7.47228 15.1765 7.76467 15.1765H13.0588C13.3512 15.1765 13.5882 15.4135 13.5882 15.7059C13.5882 15.9983 13.3512 16.2353 13.0588 16.2353H7.76467ZM9.08822 18.3529C8.79582 18.3529 8.55881 18.1159 8.55881 17.8235C8.55881 17.5312 8.79582 17.2941 9.08822 17.2941H11.7353C12.0277 17.2941 12.2647 17.5312 12.2647 17.8235C12.2647 18.1159 12.0277 18.3529 11.7353 18.3529H9.08822Z" fill="#5F6269" stroke="#5F6269" stroke-width="0.2"/></g><defs><clipPath id="clip0_308_497"><rect width="18" height="18" fill="white" transform="translate(3 3)"/></clipPath></defs></svg>',
      PlusSvg:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 13H13V15C13 15.55 12.55 16 12 16C11.45 16 11 15.55 11 15V13H9C8.45 13 8 12.55 8 12C8 11.45 8.45 11 9 11H11V9C11 8.45 11.45 8 12 8C12.55 8 13 8.45 13 9V11H15C15.55 11 16 11.45 16 12C16 12.55 15.55 13 15 13ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z" fill="#5F6269"/><mask id="mask0_308_500" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 13H13V15C13 15.55 12.55 16 12 16C11.45 16 11 15.55 11 15V13H9C8.45 13 8 12.55 8 12C8 11.45 8.45 11 9 11H11V9C11 8.45 11.45 8 12 8C12.55 8 13 8.45 13 9V11H15C15.55 11 16 11.45 16 12C16 12.55 15.55 13 15 13ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z" fill="white"/></mask><g mask="url(#mask0_308_500)"><rect width="24" height="24" fill="#5F6269"/></g></svg>',

      SelectedEmoji: "",
      message: "",
      formattedMessage: "", // New data property to hold the formatted message
      selectedFile: null,
      emojiPickerShow: false,
      uploadedImg: "",
    };
  },
  computed: {
    previewImage() {
      return URL.createObjectURL(this.selectedFile);
    },
  },
  methods: {
    // event callback
    onSelectEmoji(emoji) {
      this.SelectedEmoji = emoji.i;
      this.$refs.textInput.innerHTML += this.SelectedEmoji;
    },
    // Toggle Emoji Picker
    ShowHide() {
      this.emojiPickerShow = !this.emojiPickerShow;
    },
    // Chat input formatting buttons functions
    applyFormatting(tag) {
      document.execCommand(tag, false, null);
    },
    applyBold() {
      this.applyFormatting("bold");
    },
    applyItalic() {
      this.applyFormatting("italic");
    },
    applyLink() {
      const url = prompt("Enter the URL:");
      if (!url) return; // Do nothing if the user cancels the prompt

      const selection = window.getSelection();
      if (!selection.isCollapsed) {
        const range = selection.getRangeAt(0);
        const link = document.createElement("a");
        link.href = url;
        link.textContent = selection.toString();
        range.deleteContents(); // Delete the selected content
        range.insertNode(link); // Insert the link at the selected position
      }
    },
    applyCapitalize() {
      // Get the input element reference
      const inputElement = this.$refs.textInput;

      // Get the selected text range
      const selectionStart = inputElement.selectionStart;
      const selectionEnd = inputElement.selectionEnd;

      // Get the text before and after the selected range
      const textBeforeSelection = this.message.substring(0, selectionStart);
      const selectedText = this.message.substring(selectionStart, selectionEnd);
      const textAfterSelection = this.message.substring(selectionEnd);

      // Capitalize the selected text
      const capitalizedText = selectedText.toUpperCase();

      // Update the message with the capitalized text
      this.message = textBeforeSelection + capitalizedText + textAfterSelection;
    },
    openImageUpload(event) {
      this.$refs.imageUpload.click();
    },
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
    },
    closeUploadedImage() {
      this.selectedFile = null;
    },
  },
};
</script>
<template>
  <div class="user-chatbox-footer">
    <div v-if="selectedFile" class="preview-image">
      <img
        class="w-100 h-100 object-fit-cover"
        v-if="selectedFile"
        :src="previewImage"
        alt="Selected Image"
      />
      <span class="close-btn fw-medium" @click="closeUploadedImage">x</span>
    </div>

    <div
      class="chat-input outline-none"
      contenteditable="true"
      ref="textInput"
      @input="formatText"
      :style="{ direction: 'ltr' }"
      placeholder="Message to Sophie | Away for one hour"
    ></div>

    <div class="d-flex justify-content-between panel">
      <div>
        <IconBtn
          @click="applyBold"
          :svg="BoldSvg"
          bg="transparent"
          data-toggle="tooltip"
          data-placement="top"
          title="Bold Text"
        />
        <IconBtn
          @click="applyItalic"
          :svg="ItalicSvg"
          bg="transparent"
          data-toggle="tooltip"
          data-placement="top"
          title="Italic Text"
        />
        <IconBtn :svg="SymbolSvg" bg="transparent" />
        <IconBtn @click="applyCapitalize" :svg="ASvg" bg="transparent" />
        <IconBtn
          @click="ShowHide"
          :svg="Smiley"
          bg="transparent"
          data-toggle="tooltip"
          data-placement="top"
          title="Add emojis"
        />
        <IconBtn
          @click="applyLink"
          :svg="LinkSvg"
          bg="transparent"
          data-toggle="tooltip"
          data-placement="top"
          title="Add Link"
        />
        <IconBtn
          @click="openImageUpload"
          :svg="ImgSvg"
          bg="transparent"
          data-toggle="tooltip"
          data-placement="top"
          title="Upload Image"
        />
        <input
          type="file"
          @change="handleFileUpload"
          ref="imageUpload"
          style="display: none"
        />
        <IconBtn
          :svg="VideoSvg"
          bg="transparent"
          data-toggle="tooltip"
          data-placement="top"
          title="Video"
        />
      </div>
      <div class="d-flex">
        <IconBtn
          :svg="ShareCard"
          bg="transparent"
          data-toggle="tooltip"
          data-placement="top"
          title="Contact"
        />
        <ActionDropdown
          :svg="PlusSvg"
          padding="0"
          bg="transparent"
          data-toggle="tooltip"
          data-placement="top"
          title="Upload Document"
        />
      </div>
    </div>
    <EmojiPicker
      v-show="emojiPickerShow"
      :native="true"
      @select="onSelectEmoji"
      ref="emojiPicker"
    />
  </div>
</template>
<style scoped>
/* Chatbox Footer Style */
textarea {
  border-top: 1px solid #dfe2e8;
  width: 100%;
  border-left: 0px;
  border-bottom: 0;
  border-radius: 0px;
  box-shadow: 0px -4px 8px 0px #00000014;
}
.user-chatbox-footer {
  box-shadow: 0px -4px 8px 0px #00000014;
}
.user-chatbox-footer .panel {
  border-top: 1px solid #dfe2e8;
  padding: 4px 16px;
}

.v3-emoji-picker {
  position: absolute;
  bottom: 137px;
}
.chat-input {
  padding: 16px;
  font-size: 12px;
  border-top: 1px solid #dfe2e8;
  width: 100%;
  display: flex;
  overflow: auto;
  word-break: break-all;
  max-height: 140px;
  overflow-y: auto;
}
.chat-input:focus-visible {
  outline: none;
}
.chat-input:empty:before {
  content: attr(placeholder);
  pointer-events: none;
  display: block;
}
.panel button:hover {
  background: var(--clr-lighter-variant-two) !important;
}
.panel button:active {
  background: var(--clr-lighter-variant-two) !important;
}
.preview-image {
  width: 150px;
  height: 150px;
  position: relative;
}
.preview-image .close-btn {
  position: absolute;
  top: 22px;
  background: #fff;
  width: 30px;
  height: 30px;
  right: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

@media screen and (max-width: 991.98px) {
  .user-chatbox-footer {
    padding-bottom: 70px;
  }
}
</style>