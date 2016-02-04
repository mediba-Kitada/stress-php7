package meteorite

import io.gatling.core.Predef._ // 2
import io.gatling.http.Predef._
import scala.concurrent.duration._

class PHP56 extends Simulation { 

  val httpConf = http // 4
    .baseURL("http://php56.so-fa.st") // 5
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8") // 6
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0")
  
  val scn = scenario("BasicSimulation") // 7
    .exec(http("yesitis")  // 8
    .get("/yesitis")) // 9
  
  setUp( // 11
    scn.inject(
	  rampUsersPerSec(1) to (50) during(10 seconds),
	  constantUsersPerSec(50) during(10 seconds)
    ).protocols(httpConf) // 13
  )

}

