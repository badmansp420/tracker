import '../css/landing_page.css'
import blockchainIncon from '../images/blockchain.png';
import verifiedProfilesIcon from '../images/profile.png';
import documentsIcon from '../images/documents.png'
import { LoginContext } from "../App";

export default function LandingPage() {
    return (<div>
        <div className="m-auto px-2 py-3 landing-page-app-bar">
            <div className="row align-items-center">
                <div className="col-1">
                    Goods Tracker
                </div>
                <div className="col-3">
                    <a href="#" className="landing-page-link">Bookings</a>
                </div>
                <div className="col"></div>
                <div className="col-auto">
                    <div className="row">
                        <div className="col">
                            <LoginContext.Consumer>
                                {(context, setContext) => {
                                    return <button className="landing-page-special-btn" onClick={() => (context.setContext({
                                        login: {
                                          loggedin: false,
                                          underlogin: true,
                                          username: undefined,
                                          password: undefined,
                                        }
                                      }))}><div className="py-2 px-4 flex-fill">Login</div></button>
                                }}
                            </LoginContext.Consumer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="my-auto align-items-center text-center py-2">
            <div className="landing-page-banner-heading">
                Goods Tracker
            </div>
            <div className="landing-page-banner-subitle py-2">
                Move with the power of blockchain
            </div>
            <div className="col-4 mx-auto my-5">
                <button className="landing-page-banner-special-btn shadow">
                    <div className="px-4 py-4">Get Started</div>
                </button>
            </div>
        </div>
        <div className="flex-fill p-3 bg-white landing-page-feature-holder p-3">
            <div className="mx-auto w-75 py-5">
                <div className="row align-items-center">
                    <div className="col">
                        <img src={blockchainIncon} height={450} width={450} />
                    </div>
                    <div className="col">
                        <div className="landing-page-feature-heading">
                            Everything is on the Blockchain
                        </div>
                        <div className="landing-page-feature-subtitle py-3">
                            Live carefree from scams related to information tampering. No one messes with your data.
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-50 mx-auto"><hr /></div>
            <div className="mx-auto w-75 py-5">
                <div className="row flex-row-reverse align-items-center">
                    <div className="col">
                        <img src={verifiedProfilesIcon} height={450} width={450} />
                    </div>
                    <div className="col-1"></div>
                    <div className="col ">
                        <div className="landing-page-feature-heading">
                            Your belongings are always in safe hands
                        </div>
                        <div className="landing-page-feature-subtitle py-3">
                            Every person handling your belongings are verified by us.
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-50 mx-auto"><hr /></div>
            <div className="mx-auto w-75 py-5">
                <div className="row align-items-center">
                    <div className="col">
                        <img src={documentsIcon} height={450} width={450} />
                    </div>
                    <div className="col">
                        <div className="landing-page-feature-heading">
                            Files? Keep those coming as well!
                        </div>
                        <div className="landing-page-feature-subtitle py-3">
                            We use a Web3 IPFS Storage technology. Which means you can even store you files on the blockchain now, thanks to FileCoin!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)


}