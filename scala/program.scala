import scala.io.StdIn.readLine

object read_print {
  def main(args: Array[String]) {
    var ok = true
    while (ok) {
      val ln = readLine()
      ok = ln != null
      if (ok) println(ln)
    }
  }
}
