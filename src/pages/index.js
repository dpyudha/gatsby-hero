import * as React from "react"
import Layout from "../layouts/Layout"
import Seo from "../components/Seo"
import Card from "../components/Card"
import Header from "../components/Header"
import Display from "../components/Display"
import Col from "../components/Col"
import TextField from "../components/forms/TextField"
import Button from "../components/Button"

const IndexPage = () => {
  return (
    <Layout>
      <Seo 
        title="Home"
        description="Cool website !"
      />

      <Header>
        <Display justify="space-between">
          <Col
            lg={6}
          >
            <h1 className="text--white">
              Breckenridge Ski Vacation Packages 21/22.
            </h1>
            <p className="text--white">Search lodging, lift tickets, equipment rentals and transfers in Breckenridge.</p>
          </Col>
          <Col lg={6}>
            <Card >
              <h3><b>Customize Your Trip Package</b></h3>
              <form>
                <TextField
                  name="destination"
                  placeholder="Where do you want to ski/snowboard?"
                  label="Destination"
                />

                <Button>SEARCH PACKAGE</Button>
              </form>
            </Card>
          </Col>
        </Display>
        
      </Header>
        
    </Layout>
  )
}

export default IndexPage
