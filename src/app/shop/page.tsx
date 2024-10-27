import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
  } from "@/components/ui/breadcrumb"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  

function Shop() {
    return(
        <>
        <Navbar />
        <main>
            <div className="route-path-box w-full h-28 bg-stone-200 py-10 px-20">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbPage>Shop</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

            </div>

            <div className="main-content w-full">
                <div className="sidebar w-[400px] px-5">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-xl font-semibold">CATEGORIES</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Men (20)</li>
                                    <li>Women (09)</li>
                                    <li>Women (09)</li>
                                    <li>Bags (25)</li>
                                    <li>Clothing (04)</li>
                                    <li>Shoes (31)</li>
                                    <li>Accessories (11)</li>
                                    <li>Kids (00)</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

        </main>
        <Footer />
        </>
    );
};

export default Shop;