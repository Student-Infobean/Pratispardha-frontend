import Header from "./Header";

function TeamDetail() {
    return <>
        <Header />
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div class="card border border-success shadow-0 mb-3" style="max-width: 18rem;">
                        <div class="card-header bg-transparent border-success">Header</div>
                        <div class="card-body text-success">
                            <h5 class="card-title">Success card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div class="card-footer bg-transparent border-success">Footer</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default TeamDetail;