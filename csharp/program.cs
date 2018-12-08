using System;

namespace read_line_print_line {
	class Program {
		static void Main (string[] args) {
			string line;
			while ((line = Console.ReadLine ()) != null && line != "") {
				Console.Write (line);
			}
		}
	}
}
