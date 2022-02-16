import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import './Home.css'
// import homesvg from '../../assets/images/Homesvg.svg'

const menus = [{text: 'Home', link: 'home'}, {text: 'Search', link: 'search'}, {text: 'Team', link: 'team'}];

export default class Home extends Component {
    render() {
        return (
            <>
            <Header menus={menus} />
            <section>
                <div className="row">
                    <div className="column left">
                        <div className="title">
                            <span className="line-1">Twitter <span className="bold">Feedback</span></span>
                            <span className="line-2">Segregation System</span>
                        </div>
                        <br></br>
                        <div className="description">
                            <span className="line-1">Get Real-time Customer</span>
                            <span className="line-2">Experience Feedback</span>
                        </div>
                        <br></br>
                        <NavLink to="/search">
                        <Button text="Get Started" />
                        </NavLink>
                        {/* <svg className="homeLeftsvg" width="640" height="230" viewBox="0 0 640 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M491.721 408.792C446.421 456.033 302.222 444.088 164.809 420.12C27.3954 396.152 -76.0884 331.363 -66.3289 275.411C-56.5694 219.459 461.5 66.9999 583.771 105.925C683.5 163.5 591.313 304.933 491.721 408.792Z" fill="#4DD2C1" fill-opacity="0.4"/>
                        </svg> */}

                    </div>
                    <div className="column right">
                        {/* <img className="homeSVG" src={homesvg}></img> */}
                        <svg className="homeSVG" width="911" height="691" viewBox="0 0 911 691" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="homeSVG">
                            <g id="tweet3">
                            <path id="Vector" d="M306 111.865H228.75V205.071H306V111.865Z" fill="#F2F2F2"/>
                            <path id="Vector_2" d="M279.736 344.374L278.662 343.289C283.599 337.492 287.341 330.712 289.659 323.365C293.308 311.992 295.091 294.029 282.858 273.047C270.342 251.579 269.779 234.142 271.51 223.294C273.394 211.491 278.201 204.875 278.404 204.599L279.596 205.542C279.548 205.607 274.783 212.188 272.975 223.639C271.306 234.211 271.889 251.226 284.142 272.244C296.688 293.763 294.829 312.224 291.061 323.921C286.978 336.595 280.03 344.062 279.736 344.374Z" fill="#3F3D56"/>
                            <path id="Vector_3" d="M336 205.848H228V94H336V205.848ZM229.5 204.294H334.5V95.5534H229.5V204.294Z" fill="#3F3D56"/>
                            <path id="Vector_4" d="M316.5 126.622H250.5V128.176H316.5V126.622Z" fill="#3F3D56"/>
                            <path id="Vector_5" d="M316.5 143.71H250.5V145.264H316.5V143.71Z" fill="#3F3D56"/>
                            <path id="Vector_6" d="M316.5 160.798H250.5V162.351H316.5V160.798Z" fill="#3F3D56"/>
                            </g>
                            <g id="Tweets">
                            <g id="tweet4">
                            <path id="Vector_7" d="M635.889 107.078H555.778V206.612H635.889V107.078Z" fill="#F2F2F2"/>
                            <path id="Vector_8" d="M608.3 334L607.183 333.006C612.317 327.698 616.208 321.489 618.618 314.761C622.413 304.346 624.267 287.897 611.546 268.682C598.531 249.022 597.946 233.054 599.746 223.12C601.705 212.311 606.703 206.252 606.915 206L608.154 206.864C608.105 206.923 603.15 212.95 601.27 223.436C599.534 233.118 600.14 248.699 612.881 267.946C625.927 287.652 623.994 304.558 620.076 315.27C615.831 326.877 608.605 333.715 608.3 334Z" fill="#3F3D56"/>
                            <path id="Vector_9" d="M667 207.442H555V88H667V207.442ZM556.556 205.783H665.444V89.6589H556.556V205.783Z" fill="#3F3D56"/>
                            <path id="Vector_10" d="M646.778 122.837H578.333V124.496H646.778V122.837Z" fill="#3F3D56"/>
                            <path id="Vector_11" d="M646.778 141.085H578.333V142.744H646.778V141.085Z" fill="#3F3D56"/>
                            <path id="Vector_12" d="M646.778 159.333H578.333V160.992H646.778V159.333Z" fill="#3F3D56"/>
                            </g>
                            <g id="tweet2">
                            <path id="Vector_13" d="M219.333 174.436H150.667V265.409H219.333V174.436Z" fill="#F2F2F2"/>
                            <path id="Vector_14" d="M196.137 361L195.16 360.255C199.652 356.273 203.057 351.617 205.166 346.571C208.486 338.759 210.108 326.422 198.978 312.011C187.59 297.267 187.078 285.29 188.653 277.84C190.367 269.733 194.74 265.189 194.926 265L196.01 265.648C195.966 265.692 191.631 270.212 189.986 278.077C188.467 285.338 188.997 297.024 200.146 311.46C211.561 326.239 209.87 338.919 206.442 346.953C202.727 355.658 196.405 360.786 196.137 361Z" fill="#3F3D56"/>
                            <path id="Vector_15" d="M246 266.167H150V157H246V266.167ZM151.333 264.651H244.667V158.516H151.333V264.651Z" fill="#3F3D56"/>
                            <path id="Vector_16" d="M228.667 188.84H170V190.357H228.667V188.84Z" fill="#3F3D56"/>
                            <path id="Vector_17" d="M228.667 205.519H170V207.035H228.667V205.519Z" fill="#3F3D56"/>
                            <path id="Vector_18" d="M228.667 222.197H170V223.713H228.667V222.197Z" fill="#3F3D56"/>
                            </g>
                            <g id="tweet5">
                            <path id="Vector_19" d="M745.333 186.436H676.667V277.409H745.333V186.436Z" fill="#F2F2F2"/>
                            <path id="Vector_20" d="M722.137 363L721.16 362.332C725.652 358.766 729.057 354.594 731.166 350.074C734.486 343.076 736.108 332.024 724.978 319.114C713.59 305.905 713.078 295.177 714.653 288.503C716.367 281.24 720.74 277.17 720.926 277L722.01 277.58C721.966 277.62 717.631 281.669 715.986 288.715C714.467 295.22 714.997 305.688 726.146 318.62C737.561 331.86 735.87 343.219 732.442 350.416C728.727 358.214 722.405 362.808 722.137 363Z" fill="#3F3D56"/>
                            <path id="Vector_21" d="M772 278.167H676V169H772V278.167ZM677.333 276.651H770.667V170.516H677.333V276.651Z" fill="#3F3D56"/>
                            <path id="Vector_22" d="M754.667 200.84H696V202.357H754.667V200.84Z" fill="#3F3D56"/>
                            <path id="Vector_23" d="M754.667 217.519H696V219.035H754.667V217.519Z" fill="#3F3D56"/>
                            <path id="Vector_24" d="M754.667 234.197H696V235.713H754.667V234.197Z" fill="#3F3D56"/>
                            </g>
                            <g id="tweet1">
                            <path id="Vector_25" d="M95.2778 139.765H5.86807V237.672H95.2778V139.765Z" fill="#F2F2F2"/>
                            <path id="Vector_26" d="M65.0745 355L63.8653 354.084C69.4265 349.19 73.6419 343.467 76.2531 337.264C80.3641 327.663 82.3723 312.498 68.5918 294.785C54.4924 276.661 53.8579 261.94 55.808 252.783C57.9305 242.818 63.3451 237.233 63.5745 237L64.9173 237.796C64.8632 237.851 59.4957 243.407 57.459 253.074C55.5787 261.999 56.2346 276.363 70.0382 294.107C84.171 312.273 82.0773 327.858 77.8327 337.734C73.2333 348.433 65.4057 354.737 65.0745 355Z" fill="#3F3D56"/>
                            <path id="Vector_27" d="M130 238.488H5V121H130V238.488ZM6.73611 236.856H128.264V122.632H6.73611V236.856Z" fill="#3F3D56"/>
                            <path id="Vector_28" d="M107.431 155.267H31.0417V156.899H107.431V155.267Z" fill="#3F3D56"/>
                            <path id="Vector_29" d="M107.431 173.217H31.0417V174.849H107.431V173.217Z" fill="#3F3D56"/>
                            <path id="Vector_30" d="M107.431 191.167H31.0417V192.798H107.431V191.167Z" fill="#3F3D56"/>
                            </g>
                            <g id="tweet6">
                            <path id="Vector_31" d="M817.405 99.2905H727.869V205.154H817.405V99.2905Z" fill="#F2F2F2"/>
                            <path id="Vector_32" d="M787.074 345L785.865 343.913C791.427 338.107 795.642 331.316 798.253 323.958C802.364 312.566 804.372 294.574 790.592 273.558C776.492 252.055 775.858 234.59 777.808 223.725C779.931 211.903 785.345 205.276 785.575 205L786.917 205.945C786.863 206.01 781.496 212.601 779.459 224.071C777.579 234.66 778.235 251.702 792.038 272.754C806.171 294.307 804.077 312.798 799.833 324.514C795.233 337.209 787.406 344.688 787.074 345Z" fill="#3F3D56"/>
                            <path id="Vector_33" d="M852.176 206.036H727V79H852.176V206.036ZM728.739 204.272H850.437V80.7644H728.739V204.272Z" fill="#3F3D56"/>
                            <path id="Vector_34" d="M829.574 116.052H753.078V117.817H829.574V116.052Z" fill="#3F3D56"/>
                            <path id="Vector_35" d="M829.574 135.46H753.078V137.225H829.574V135.46Z" fill="#3F3D56"/>
                            <path id="Vector_36" d="M829.574 154.869H753.078V156.633H829.574V154.869Z" fill="#3F3D56"/>
                            </g>
                            </g>
                            <g id="Vector_37">
                            <path id="Vector_38" d="M848.412 283.914H0V691H848.412V283.914Z" fill="#00BFA6" fillOpacity="0.7"/>
                            </g>
                            <path id="Vector_39" d="M150.498 461C152.754 461 154.582 459.151 154.582 456.87C154.582 454.589 152.754 452.74 150.498 452.74C148.243 452.74 146.414 454.589 146.414 456.87C146.414 459.151 148.243 461 150.498 461Z" fill="#3F3D56"/>
                            <path id="Vector_40" d="M164.501 461C166.756 461 168.585 459.151 168.585 456.87C168.585 454.589 166.756 452.74 164.501 452.74C162.245 452.74 160.417 454.589 160.417 456.87C160.417 459.151 162.245 461 164.501 461Z" fill="#3F3D56"/>
                            <path id="Vector_41" d="M178.503 461C180.758 461 182.587 459.151 182.587 456.87C182.587 454.589 180.758 452.74 178.503 452.74C176.247 452.74 174.419 454.589 174.419 456.87C174.419 459.151 176.247 461 178.503 461Z" fill="#3F3D56"/>
                            <path id="Vector_42" opacity="0.1" d="M224.145 283.914L0 439.529V359.807L109.313 283.914H224.145Z" fill="black"/>
                            <path id="Vector_43" d="M129.593 399.975L114.238 383.327L130.7 367.799L146.055 384.447L129.593 399.975ZM116.685 383.413L129.678 397.5L143.607 384.361L130.615 370.274L116.685 383.413Z" fill="#F0F0F0"/>
                            <path id="Vector_44" d="M636.309 389.504H613.798V366.738H636.309V389.504ZM615.529 387.753H634.577V368.489H615.529V387.753Z" fill="#3F3D56"/>
                            <path id="Vector_45" d="M775.784 583.791C782.132 583.791 787.277 578.587 787.277 572.168C787.277 565.749 782.132 560.545 775.784 560.545C769.437 560.545 764.291 565.749 764.291 572.168C764.291 578.587 769.437 583.791 775.784 583.791Z" fill="#F0F0F0"/>
                            <path id="Vector_46" d="M333.493 552.246C339.84 552.246 344.986 547.042 344.986 540.623C344.986 534.204 339.84 529 333.493 529C327.146 529 322 534.204 322 540.623C322 547.042 327.146 552.246 333.493 552.246Z" fill="black"/>
                            <path id="Vector_47" d="M775.784 605.745C769.217 605.745 762.798 603.776 757.338 600.086C751.878 596.397 747.622 591.153 745.109 585.018C742.596 578.882 741.939 572.131 743.22 565.618C744.501 559.104 747.663 553.121 752.307 548.426C756.95 543.73 762.866 540.532 769.307 539.236C775.747 537.941 782.423 538.606 788.49 541.147C794.557 543.688 799.742 547.992 803.391 553.514C807.039 559.035 808.986 565.527 808.986 572.168C808.976 581.07 805.475 589.605 799.251 595.9C793.026 602.194 784.587 605.735 775.784 605.745ZM775.784 541.174C769.723 541.174 763.797 542.992 758.757 546.397C753.717 549.803 749.789 554.644 747.469 560.307C745.149 565.971 744.542 572.203 745.725 578.215C746.907 584.227 749.826 589.75 754.113 594.084C758.399 598.419 763.86 601.371 769.805 602.567C775.75 603.763 781.912 603.149 787.513 600.803C793.113 598.457 797.899 594.485 801.267 589.388C804.635 584.291 806.432 578.298 806.432 572.168C806.423 563.951 803.191 556.073 797.445 550.262C791.7 544.452 783.91 541.183 775.784 541.174Z" fill="#2F2E41"/>
                            <path id="Vector_48" d="M408.091 321.888L414.136 334.277L427.655 336.263L417.873 345.906L420.182 359.523L408.091 353.094L395.998 359.523L398.308 345.906L388.526 336.263L402.045 334.277L408.091 321.888Z" fill="#F0F0F0"/>
                            <path id="Vector_49" d="M429.946 42.5576H429.946C450.836 42.5576 467.771 61.564 467.771 85.0096V114.798H458.712L453.467 103.761L454.779 114.798H396.55L391.783 104.764L392.974 114.798H386.419V91.4087C386.419 64.429 405.906 42.5576 429.946 42.5576Z" fill="#2F2E41"/>
                            <path id="Vector_50" d="M473.287 237.176L496.511 247.158L577.217 313.508C580.184 317.196 582.003 321.692 582.442 326.426C583.023 334.059 607.408 373.986 598.699 379.271C589.99 384.555 558.637 400.409 556.895 389.84C555.153 379.271 545.864 334.059 545.864 334.059L468.062 263.598L473.287 237.176Z" fill="#2F2E41"/>
                            <path id="Vector_51" d="M412.903 229.543C412.903 229.543 407.678 281.214 422.774 290.608C437.87 300.003 504.64 329.949 504.64 329.949C504.64 329.949 476.19 356.959 481.996 363.417C487.802 369.876 513.93 387.491 517.414 383.968C520.897 380.445 559.798 338.169 555.153 324.664C550.509 311.159 486.061 267.122 486.061 267.122L478.513 239.525L476.19 217.212L451.804 201.359L412.903 229.543Z" fill="#2F2E41"/>
                            <path id="Vector_52" d="M439.504 109.24C452.872 109.24 463.709 98.2804 463.709 84.7615C463.709 71.2426 452.872 60.2833 439.504 60.2833C426.136 60.2833 415.299 71.2426 415.299 84.7615C415.299 98.2804 426.136 109.24 439.504 109.24Z" fill="#FFB9B9"/>
                            <path id="Vector_53" d="M420.742 94.7871C420.742 94.7871 421.903 117.1 403.904 124.146C385.905 131.192 448.611 176.991 448.611 176.991V125.907C448.611 125.907 440.482 117.1 448.611 103.595L420.742 94.7871Z" fill="#FFB9B9"/>
                            <path id="Vector_54" d="M382.131 199.597L386.776 222.497L400.71 301.177C400.71 301.177 389.098 334.646 404.775 334.059C420.451 333.472 412.903 297.654 412.903 297.654L404.775 232.478V207.23L382.131 199.597Z" fill="#FFB9B9"/>
                            <path id="Vector_55" d="M481.996 188.441L487.222 208.992L511.027 267.121C511.027 267.121 527.284 294.718 513.93 294.131C500.576 293.544 500.576 267.121 500.576 267.121L473.287 220.148V193.725L481.996 188.441Z" fill="#FFB9B9"/>
                            <path id="Vector_56" d="M486.061 359.894L466.9 378.097C466.9 378.097 453.546 375.161 448.321 391.014C443.095 406.868 439.612 416.85 439.612 416.85L446.579 420.96L455.288 408.63C455.288 408.63 460.514 430.942 465.739 432.703C470.965 434.465 497.092 446.208 494.77 432.703L481.996 413.914C481.996 413.914 480.254 392.776 485.48 391.014C490.705 389.253 504.64 371.638 504.64 371.638L486.061 359.894Z" fill="#2F2E41"/>
                            <path id="Vector_57" d="M411.983 247.745C411.983 247.745 466.56 227.781 470.044 229.543C472.637 230.701 475.399 231.426 478.222 231.689L478.173 223.671C478.173 223.671 460.174 217.212 450.303 221.322C440.433 225.432 410.241 243.635 410.241 243.635L411.983 247.745Z" fill="#3F3D56"/>
                            <path id="Vector_58" d="M445.127 165.248C445.127 165.248 429.451 147.045 424.806 135.889C421.867 129.126 416.473 123.762 409.737 120.904C409.737 120.904 374.873 128.843 375.454 142.935C376.034 157.027 397.517 178.753 397.517 178.753C397.517 178.753 394.614 256.846 410.291 255.672C413.672 251.591 416.058 246.764 417.258 241.58C419 233.359 472.997 224.552 472.997 224.552C472.997 224.552 477.642 232.772 478.222 229.249C478.803 225.726 473.577 139.412 473.577 139.412L445.89 120.904L445.127 165.248Z" fill="#D0CDE1"/>
                            <path id="Vector_59" d="M379.926 137.263L379.538 137.483C378.297 138.188 377.264 139.213 376.545 140.455C375.826 141.697 375.447 143.11 375.447 144.549L375.453 188.125C375.449 189.309 375.19 190.478 374.694 191.551C374.198 192.625 373.477 193.576 372.581 194.339C370.345 196.263 368.271 199.035 372.551 200.478C379.518 202.826 406.807 214.57 407.388 210.46C407.968 206.349 409.129 201.652 407.388 201.652C406.024 201.652 397.899 159.547 391.371 141.545C390.972 140.443 390.341 139.441 389.522 138.61C388.703 137.779 387.715 137.137 386.627 136.73C385.538 136.323 384.376 136.159 383.219 136.251C382.062 136.343 380.938 136.689 379.926 137.263Z" fill="#D0CDE1"/>
                            <path id="Vector_60" d="M465.739 137.357L473.868 139.706L483.158 180.22C483.158 180.22 494.189 182.569 490.705 186.679C487.222 190.789 472.707 201.358 472.707 201.358L465.739 137.357Z" fill="#D0CDE1"/>
                            <path id="Vector_61" d="M419.193 54.2517C421.013 51.7799 423.372 49.7654 426.086 48.3645C428.801 46.9636 431.798 46.2141 434.845 46.174H435.588C449.906 46.174 461.513 59.2767 461.513 75.4398V75.4399H456.716L455.941 69.4756L454.805 75.4399H426.35L423.966 70.394L424.562 75.4399H418.964C416.352 88.5591 420.105 101.678 430.224 114.798H420.688L415.92 104.706L417.112 114.798H398.934L395.358 91.5865C395.358 74.2037 405.346 59.4634 419.193 54.2517Z" fill="#2F2E41"/>
                            <g id="Group 11">
                            <path id="Vector_62" d="M708.151 448.824H140.262V691H708.151V448.824Z" fill="#F0F0F0"/>
                            <path id="Vector_63" d="M708.151 463.601H140.262V465.908H708.151V463.601Z" fill="#3F3D56"/>
                            <path id="star1" d="M441.61 552.454L447.656 564.843L461.175 566.829L451.393 576.472L453.702 590.088L441.61 583.66L429.518 590.088L431.827 576.472L422.045 566.829L435.564 564.843L441.61 552.454Z" fill="#00BFA6"/>
                            <path id="star2" d="M490.505 554.185L496.551 566.575L510.07 568.56L500.287 578.204L502.597 591.82L490.505 585.392L478.414 591.82L480.723 578.204L470.941 568.56L484.46 566.575L490.505 554.185Z" fill="#00BFA6"/>
                            <path id="star3" d="M539.401 554.185L545.447 566.575L558.966 568.56L549.183 578.204L551.493 591.82L539.401 585.392L527.309 591.82L529.618 578.204L519.836 568.56L533.355 566.575L539.401 554.185Z" fill="#00BFA6"/>
                            <path id="star4" d="M588.296 554.185L594.342 566.575L607.861 568.56L598.078 578.204L600.388 591.82L588.296 585.392L576.205 591.82L578.514 578.204L568.732 568.56L582.251 566.575L588.296 554.185Z" fill="#00BFA6"/>
                            <path id="star5" d="M637.192 554.185L643.238 566.575L656.757 568.56L646.974 578.204L649.283 591.82L637.192 585.392L625.099 591.82L627.409 578.204L617.627 568.56L631.146 566.575L637.192 554.185Z" fill="#00BFA6"/>
                            <g id="Group 10">
                            <path id="Vector_64" opacity="0.1" d="M479.068 283.914L0 616.514V536.78L364.236 283.914H479.068Z" fill="black"/>
                            </g>
                            <g id="Shape">
                            <path d="M321.779 579.398L304.838 577.216C298.234 569.95 288.504 567.564 279.799 571.077C269.741 575.306 263.25 586.311 263.712 598.347H211.559C209.703 598.365 207.975 599.409 206.942 601.138C205.808 602.983 205.562 605.338 206.283 607.428C209.824 617.62 220.2 640.445 242.757 643.357C236.777 651.272 229.449 657.767 221.201 662.462C218.969 663.755 217.753 666.534 218.209 669.306C218.573 672.06 220.503 674.222 222.959 674.628C229.25 675.706 235.603 676.258 241.967 676.279C256.378 676.279 273.342 673.214 286.31 661.732C297.725 651.63 304.373 636.473 306.084 616.43C308.885 612.899 310.842 608.629 311.774 604.019L324.916 590.695C326.629 588.975 327.268 586.279 326.545 583.832C325.882 581.424 324.012 579.684 321.779 579.398ZM321.465 586.412L307.703 600.368C307.289 600.788 307.008 601.348 306.902 601.964C306.19 606.184 304.402 610.082 301.755 613.186C301.348 613.677 301.099 614.307 301.048 614.976C299.645 633.708 293.613 647.915 283.124 657.203C265.138 673.125 238.191 671.373 223.731 668.919C223.477 668.874 223.288 668.631 223.283 668.342C223.211 668.036 223.335 667.714 223.584 667.565C242.206 656.655 249.535 642.8 249.834 642.217C250.293 641.325 250.293 640.226 249.835 639.333C249.376 638.441 248.529 637.89 247.61 637.888C224.843 637.888 214.474 615.117 211.067 605.326C210.969 605.012 211.011 604.664 211.18 604.391C211.254 604.233 211.391 604.126 211.548 604.103H266.53C267.293 604.103 268.017 603.723 268.506 603.066C268.995 602.408 269.199 601.542 269.062 600.7C268.931 599.901 268.863 599.09 268.859 598.278C268.423 588.722 273.519 579.937 281.484 576.512C288.606 573.625 296.576 575.755 301.773 581.932C302.19 582.425 302.747 582.738 303.348 582.815L321.19 585.125C321.413 585.155 321.595 585.34 321.643 585.586C321.742 585.876 321.672 586.205 321.465 586.412Z" fill="#3F3D56"/>
                            <path d="M321.779 579.398L304.838 577.216C298.234 569.95 288.504 567.564 279.799 571.077C269.741 575.306 263.25 586.311 263.712 598.347H211.559C209.703 598.365 207.975 599.409 206.942 601.138C205.808 602.983 205.562 605.338 206.283 607.428C209.824 617.62 220.2 640.445 242.757 643.357C236.777 651.272 229.449 657.767 221.201 662.462C218.969 663.755 217.753 666.534 218.209 669.306C218.573 672.06 220.503 674.222 222.959 674.628C229.25 675.706 235.603 676.258 241.967 676.279C256.378 676.279 273.342 673.214 286.31 661.732C297.725 651.63 304.373 636.473 306.084 616.43C308.885 612.899 310.842 608.629 311.774 604.019L324.916 590.695C326.629 588.975 327.268 586.279 326.545 583.832C325.882 581.424 324.012 579.684 321.779 579.398ZM321.465 586.412L307.703 600.368C307.289 600.788 307.008 601.348 306.902 601.964C306.19 606.184 304.402 610.082 301.755 613.186C301.348 613.677 301.099 614.307 301.048 614.976C299.645 633.708 293.613 647.915 283.124 657.203C265.138 673.125 238.191 671.373 223.731 668.919C223.477 668.874 223.288 668.631 223.283 668.342C223.211 668.036 223.335 667.714 223.584 667.565C242.206 656.655 249.535 642.8 249.834 642.217C250.293 641.325 250.293 640.226 249.835 639.333C249.376 638.441 248.529 637.89 247.61 637.888C224.843 637.888 214.474 615.117 211.067 605.326C210.969 605.012 211.011 604.664 211.18 604.391C211.254 604.233 211.391 604.126 211.548 604.103H266.53C267.293 604.103 268.017 603.723 268.506 603.066C268.995 602.408 269.199 601.542 269.062 600.7C268.931 599.901 268.863 599.09 268.859 598.278C268.423 588.722 273.519 579.937 281.484 576.512C288.606 573.625 296.576 575.755 301.773 581.932C302.19 582.425 302.747 582.738 303.348 582.815L321.19 585.125C321.413 585.155 321.595 585.34 321.643 585.586C321.742 585.876 321.672 586.205 321.465 586.412Z" stroke="black"/>
                            </g>
                            <g id="Shape_2">
                            <path d="M349.99 503.097H216.17C210.485 503.097 205.877 508.266 205.877 514.642V552.165C205.877 558.541 210.485 563.711 216.17 563.711H326.291L333.594 582.129C334.213 583.693 335.596 584.702 337.122 584.702C338.649 584.702 340.031 583.693 340.651 582.129L347.954 563.711H349.99C355.675 563.711 360.283 558.541 360.283 552.165V514.642C360.283 508.266 355.675 503.097 349.99 503.097ZM355.137 552.165C355.137 555.353 352.832 557.938 349.99 557.938H346.284C345.267 557.937 344.346 558.608 343.932 559.649L337.122 576.818L330.313 559.649C329.899 558.608 328.978 557.937 327.961 557.938H216.17C213.328 557.938 211.024 555.353 211.024 552.165V514.642C211.024 511.454 213.328 508.869 216.17 508.869H349.99C352.832 508.869 355.137 511.454 355.137 514.642V552.165Z" fill="#3F3D56"/>
                            <path d="M349.99 503.097H216.17C210.485 503.097 205.877 508.266 205.877 514.642V552.165C205.877 558.541 210.485 563.711 216.17 563.711H326.291L333.594 582.129C334.213 583.693 335.596 584.702 337.122 584.702C338.649 584.702 340.031 583.693 340.651 582.129L347.954 563.711H349.99C355.675 563.711 360.283 558.541 360.283 552.165V514.642C360.283 508.266 355.675 503.097 349.99 503.097ZM355.137 552.165C355.137 555.353 352.832 557.938 349.99 557.938H346.284C345.267 557.937 344.346 558.608 343.932 559.649L337.122 576.818L330.313 559.649C329.899 558.608 328.978 557.937 327.961 557.938H216.17C213.328 557.938 211.024 555.353 211.024 552.165V514.642C211.024 511.454 213.328 508.869 216.17 508.869H349.99C352.832 508.869 355.137 511.454 355.137 514.642V552.165Z" stroke="black"/>
                            </g>
                            <g id="Shape_3">
                            <path d="M272.786 607.006C271.365 607.006 270.213 608.299 270.213 609.893C270.213 610.077 270.03 628.591 258.594 636.286C257.788 636.807 257.295 637.776 257.306 638.819C257.317 639.863 257.829 640.819 258.645 641.319C259.462 641.82 260.456 641.787 261.244 641.233C275.2 631.829 275.36 610.785 275.36 609.893C275.36 608.299 274.208 607.006 272.786 607.006Z" fill="#3F3D56"/>
                            <path d="M272.786 607.006C271.365 607.006 270.213 608.299 270.213 609.893C270.213 610.077 270.03 628.591 258.594 636.286C257.788 636.807 257.295 637.776 257.306 638.819C257.317 639.863 257.829 640.819 258.645 641.319C259.462 641.82 260.456 641.787 261.244 641.233C275.2 631.829 275.36 610.785 275.36 609.893C275.36 608.299 274.208 607.006 272.786 607.006Z" stroke="black"/>
                            </g>
                            <g id="Shape_4">
                            <path d="M223.891 523.301H234.185C235.606 523.301 236.758 522.009 236.758 520.415C236.758 518.821 235.606 517.528 234.185 517.528H223.891C222.469 517.528 221.317 518.821 221.317 520.415C221.317 522.009 222.469 523.301 223.891 523.301Z" fill="#3F3D56"/>
                            <path d="M223.891 523.301H234.185C235.606 523.301 236.758 522.009 236.758 520.415C236.758 518.821 235.606 517.528 234.185 517.528H223.891C222.469 517.528 221.317 518.821 221.317 520.415C221.317 522.009 222.469 523.301 223.891 523.301Z" stroke="black"/>
                            </g>
                            <g id="Shape_5">
                            <path d="M244.478 523.301H277.933C279.354 523.301 280.507 522.009 280.507 520.415C280.507 518.821 279.354 517.528 277.933 517.528H244.478C243.057 517.528 241.905 518.821 241.905 520.415C241.905 522.009 243.057 523.301 244.478 523.301Z" fill="#3F3D56"/>
                            <path d="M244.478 523.301H277.933C279.354 523.301 280.507 522.009 280.507 520.415C280.507 518.821 279.354 517.528 277.933 517.528H244.478C243.057 517.528 241.905 518.821 241.905 520.415C241.905 522.009 243.057 523.301 244.478 523.301Z" stroke="black"/>
                            </g>
                            <g id="Shape_6">
                            <path d="M319.108 517.528H288.227C286.806 517.528 285.654 518.821 285.654 520.415C285.654 522.009 286.806 523.301 288.227 523.301H319.108C320.53 523.301 321.682 522.009 321.682 520.415C321.682 518.821 320.53 517.528 319.108 517.528Z" fill="#3F3D56"/>
                            <path d="M319.108 517.528H288.227C286.806 517.528 285.654 518.821 285.654 520.415C285.654 522.009 286.806 523.301 288.227 523.301H319.108C320.53 523.301 321.682 522.009 321.682 520.415C321.682 518.821 320.53 517.528 319.108 517.528Z" stroke="black"/>
                            </g>
                            <g id="Shape_7">
                            <path d="M252.199 531.96H223.891C222.469 531.96 221.317 533.253 221.317 534.847C221.317 536.441 222.469 537.733 223.891 537.733H252.199C253.62 537.733 254.772 536.441 254.772 534.847C254.772 533.253 253.62 531.96 252.199 531.96Z" fill="#3F3D56"/>
                            <path d="M252.199 531.96H223.891C222.469 531.96 221.317 533.253 221.317 534.847C221.317 536.441 222.469 537.733 223.891 537.733H252.199C253.62 537.733 254.772 536.441 254.772 534.847C254.772 533.253 253.62 531.96 252.199 531.96Z" stroke="black"/>
                            </g>
                            <g id="Shape_8">
                            <path d="M301.094 531.96H265.066C263.645 531.96 262.492 533.253 262.492 534.847C262.492 536.441 263.645 537.733 265.066 537.733H301.094C302.515 537.733 303.668 536.441 303.668 534.847C303.668 533.253 302.515 531.96 301.094 531.96Z" fill="#3F3D56"/>
                            <path d="M301.094 531.96H265.066C263.645 531.96 262.492 533.253 262.492 534.847C262.492 536.441 263.645 537.733 265.066 537.733H301.094C302.515 537.733 303.668 536.441 303.668 534.847C303.668 533.253 302.515 531.96 301.094 531.96Z" stroke="black"/>
                            </g>
                            </g>
                            <path id="Vector_65" d="M333.493 552.246C339.84 552.246 344.986 547.042 344.986 540.623C344.986 534.204 339.84 529 333.493 529C327.146 529 322 534.204 322 540.623C322 547.042 327.146 552.246 333.493 552.246Z" fill="#00BFA6"/>
                            <path id="Vector_66" d="M333.493 552.246C339.84 552.246 344.986 547.042 344.986 540.623C344.986 534.204 339.84 529 333.493 529C327.146 529 322 534.204 322 540.623C322 547.042 327.146 552.246 333.493 552.246Z" fill="#00BFA6"/>
                            <path id="Vector_67" d="M333 549C337.418 549 341 545.418 341 541C341 536.582 337.418 533 333 533C328.582 533 325 536.582 325 541C325 545.418 328.582 549 333 549Z" fill="#F0F0F0"/>
                            <path id="Vector_68" d="M154.761 461.539C157.39 461.539 159.522 459.404 159.522 456.77C159.522 454.135 157.39 452 154.761 452C152.132 452 150 454.135 150 456.77C150 459.404 152.132 461.539 154.761 461.539Z" fill="#3F3D56"/>
                            <path id="Vector_69" d="M171.084 461.539C173.714 461.539 175.845 459.404 175.845 456.77C175.845 454.135 173.714 452 171.084 452C168.455 452 166.323 454.135 166.323 456.77C166.323 459.404 168.455 461.539 171.084 461.539Z" fill="#3F3D56"/>
                            <path id="Vector_70" d="M187.407 461.539C190.037 461.539 192.168 459.404 192.168 456.77C192.168 454.135 190.037 452 187.407 452C184.778 452 182.646 454.135 182.646 456.77C182.646 459.404 184.778 461.539 187.407 461.539Z" fill="#3F3D56"/>
                            <path id="Vector_71" d="M564.443 381.033L574.314 410.391C574.314 410.391 563.863 421.547 569.088 430.942V463.236H577.217L579.539 446.208C579.539 446.208 588.798 463.021 593.474 463.236C603.277 463.687 622.689 467.214 623.27 461.929C623.851 456.645 608.57 451.493 608.57 451.493L592.313 406.281L585.345 378.684L564.443 381.033Z" fill="#2F2E41"/>
                            </g>
                        </svg>

                    </div>
                </div>
            </section>
            </>
        )
    }
}