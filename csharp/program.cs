using System;

namespace formbucket_ops {
	class Program {
		static void Main (string[] args) {
			string line;
			while ((line = Console.ReadLine ()) != null && line != "") {
				Console.Write (line);
			}
		}
	}
}
