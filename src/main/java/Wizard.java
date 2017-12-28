import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;

@Controller
@EnableAutoConfiguration
public class Wizard {

    @ResponseBody
    @RequestMapping("/api/get")
    String get(@RequestParam(value="name", defaultValue="") String name) {
        return "working on it " + name;
    }
    
    @ResponseBody
    @RequestMapping("/api/post")
    String post(@RequestBody String name) {
    	System.out.println(name);
        return "ok " + name;
    }

    public static void main(String[] args) throws Exception {
        SpringApplication.run(Wizard.class, args);
    }
}
