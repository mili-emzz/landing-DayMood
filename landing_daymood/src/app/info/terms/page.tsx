import Navbar from "@/app/components/shared/navbar";
import Footer from "@/app/landing/footer/footer";

export default function TermsAndConditions() {
    return (
        <main className="min-h-screen bg-[#F9EDED]">
            <Navbar />
            
            <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
                    Términos y condiciones generales para el uso de DayMood
                </h1>
                
                <p className="text-gray-600 mb-12 italic">
                    Última actualización: 13 de marzo de 2026
                </p>

                <div className="space-y-12 text-gray-800 leading-relaxed text-lg">
                    
                    <section>
                        <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-[#FF9F9B] pb-2 inline-block">
                            1. Ámbito de aplicación y objeto del contrato
                        </h2>
                        <div className="space-y-4">
                            <p>
                                <strong>1.1.</strong> DayMood, con domicilio en Carretera Tuxtla Gutierrez. - Portillo Zaragoza Km 21+500, Las Brisas, 29150 Suchiapa, Chis., en lo sucesivo denominado "el Proveedor", ofrece a los usuarios acceso a una plataforma digital destinada al registro de emociones, hábitos diarios y participación en foros de apoyo relacionados con el bienestar emocional y la salud mental.
                            </p>
                            <p>
                                <strong>1.2.</strong> Los presentes Términos y Condiciones regulan el acceso, uso y funcionamiento de los servicios ofrecidos a través de la aplicación, incluyendo herramientas para el seguimiento del estado emocional, registro de hábitos, generación de estadísticas personales y participación en espacios comunitarios de discusión.
                            </p>
                            <p>
                                <strong>1.3.</strong> Al utilizar la aplicación, el usuario declara haber leído, comprendido y aceptado los presentes Términos y Condiciones, así como las políticas de privacidad y tratamiento de datos personales asociadas al servicio.
                            </p>
                            <p>
                                <strong>1.4.</strong> La aplicación tiene como finalidad promover la conciencia sobre el bienestar emocional y los hábitos saludables, en concordancia con los principios establecidos en el Artículo 73 Bis de la Ley General de Salud, fomentando el respeto a la dignidad humana, la no discriminación y la promoción de la salud mental.
                            </p>
                            <p>
                                <strong>1.5.</strong> El uso de la aplicación es de carácter informativo y de apoyo al bienestar personal, por lo que no sustituye la atención médica o psicológica profesional.
                            </p>
                            <p>
                                <strong>1.6.</strong> Finalidades de Investigación: La plataforma podrá incluir formularios y cuestionarios con el objetivo de recolectar datos para la validación de hipótesis científicas o estadísticas relacionadas con el bienestar emocional.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-[#FF9F9B] pb-2 inline-block">
                            2. Celebración, duración y rescisión del acuerdo
                        </h2>
                        <div className="space-y-4">
                            <p>
                                <strong>2.1.</strong> El acceso a la plataforma se formaliza cuando el usuario crea una cuenta y acepta electrónicamente los presentes Términos y Condiciones.
                            </p>
                            <p>
                                <strong>2.2.</strong> El servicio permanecerá activo mientras el usuario mantenga su cuenta registrada en la plataforma.
                            </p>
                            <p>
                                <strong>2.3.</strong> El usuario podrá cancelar su cuenta en cualquier momento mediante las opciones disponibles dentro de la aplicación o solicitándolo al proveedor a través de los medios de contacto establecidos.
                            </p>
                            <p>
                                <strong>2.4.</strong> El proveedor podrá suspender o cancelar el acceso de un usuario en caso de incumplimiento de estos términos, uso indebido de la plataforma o conductas que afecten la seguridad o integridad de otros usuarios.
                            </p>
                            <p>
                                <strong>2.5.</strong> Una vez cancelada la cuenta, el proveedor podrá eliminar los datos almacenados conforme a lo establecido en la legislación aplicable y en la política de privacidad.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-[#FF9F9B] pb-2 inline-block">
                            3. Uso adecuado de la plataforma
                        </h2>
                        <div className="space-y-4">
                            <p>
                                <strong>3.1.</strong> El usuario se compromete a utilizar la aplicación de manera responsable, respetuosa y conforme a la legislación aplicable.
                            </p>
                            <p>
                                <strong>3.2.</strong> En los espacios comunitarios, como foros o comentarios, queda prohibido:
                            </p>
                            <ul className="list-disc pl-8 space-y-2 mt-2">
                                <li>Publicar contenido ofensivo, discriminatorio o que promueva violencia.</li>
                                <li>Compartir información falsa o engañosa relacionada con temas de salud.</li>
                                <li>Divulgar información personal de terceros sin su consentimiento.</li>
                            </ul>
                            <p className="mt-4">
                                <strong>3.3.</strong> El proveedor podrá eliminar publicaciones o contenido que infrinjan estas normas.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-[#FF9F9B] pb-2 inline-block">
                            4. Consentimiento informado y bienestar del usuario
                        </h2>
                        <div className="space-y-4">
                            <p>
                                <strong>4.1.</strong> De acuerdo con lo establecido en el Artículo 51 Bis de la Ley General de Salud, el uso de la plataforma se basa en el principio de consentimiento informado, por lo que el usuario será informado de manera clara y comprensible sobre los objetivos y funcionamiento de la aplicación.
                            </p>
                            <p>
                                <strong>4.2.</strong> La aplicación busca apoyar la reflexión personal sobre el bienestar emocional, sin representar un diagnóstico clínico ni sustituir tratamientos profesionales.
                            </p>
                            <p>
                                <strong>4.3.</strong> En caso de que el usuario experimente situaciones que afecten gravemente su salud mental, se recomienda acudir con profesionales de la salud o instituciones especializadas.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-[#FF9F9B] pb-2 inline-block">
                            5. Protección de datos personales y confidencialidad
                        </h2>
                        <div className="space-y-4">
                            <p>
                                <strong>5.1.</strong> El tratamiento de los datos personales del usuario se realizará conforme a lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
                            </p>
                            <p>
                                <strong>5.2.</strong> Los datos personales recopilados por la aplicación pueden incluir información como:
                            </p>
                            <ul className="list-disc pl-8 space-y-2 mt-2">
                                <li>Correo electrónico</li>
                                <li>Información relacionada con emociones o hábitos registrados</li>
                                <li>Datos necesarios para el funcionamiento del sistema</li>
                            </ul>
                            <p className="mt-4">
                                <strong>5.3.</strong> Algunos de estos datos pueden considerarse datos personales sensibles, ya que se relacionan con el estado emocional o bienestar del usuario. Su tratamiento se realizará únicamente con el consentimiento expreso del titular.
                            </p>
                            <p>
                                <strong>5.4.</strong> El usuario podrá ejercer en cualquier momento sus Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) respecto a sus datos personales, mediante los mecanismos establecidos en la política de privacidad.
                            </p>
                            <p>
                                <strong>5.5.</strong> El proveedor implementará medidas de seguridad administrativas, técnicas y físicas para proteger los datos personales contra daño, pérdida, alteración o acceso no autorizado, conforme al Artículo 18 de la Ley Federal de Protección de Datos Personales.
                            </p>
                            <p>
                                <strong>5.6.</strong> Uso de datos para investigación: Los datos recolectados mediante formularios específicos de investigación serán tratados bajo principios de disociación (anonimización), asegurando que los resultados no puedan ser vinculados a un individuo identificado o identificable.
                            </p>
                            <p>
                                <strong>5.7.</strong> Consentimiento Específico: Al responder formularios de investigación, el usuario otorga su consentimiento expreso para que el Proveedor procese dicha información con fines académicos, estadísticos o de mejora del servicio, respetando siempre la confidencialidad establecida en la Sección 6.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-[#FF9F9B] pb-2 inline-block">
                            6. Confidencialidad
                        </h2>
                        <div className="space-y-4">
                            <p>
                                <strong>6.1.</strong> Toda la información personal registrada por los usuarios será tratada de manera confidencial.
                            </p>
                            <p>
                                <strong>6.2.</strong> El proveedor adoptará medidas razonables para evitar el acceso no autorizado a la información almacenada en la plataforma.
                            </p>
                            <p>
                                <strong>6.3.</strong> La información podrá ser divulgada únicamente en los siguientes casos:
                            </p>
                            <ul className="list-disc pl-8 space-y-2 mt-2">
                                <li>Cuando exista una obligación legal</li>
                                <li>Por requerimiento de una autoridad competente</li>
                                <li>Cuando sea necesario para el funcionamiento técnico del servicio</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-[#FF9F9B] pb-2 inline-block">
                            7. Limitación de responsabilidad
                        </h2>
                        <div className="space-y-4">
                            <p>
                                <strong>7.1.</strong> La aplicación proporciona herramientas digitales de apoyo al bienestar emocional; sin embargo, el proveedor no garantiza resultados específicos derivados del uso de la plataforma.
                            </p>
                            <p>
                                <strong>7.2.</strong> El proveedor no será responsable por decisiones personales tomadas por los usuarios basadas en la información o herramientas disponibles en la aplicación.
                            </p>
                            <p>
                                <strong>7.3.</strong> El usuario es responsable de la veracidad de la información que proporcione en la plataforma.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-[#FF9F9B] pb-2 inline-block">
                            8. Modificaciones de los términos
                        </h2>
                        <div className="space-y-4">
                            <p>
                                <strong>8.1.</strong> El proveedor se reserva el derecho de modificar los presentes Términos y Condiciones en cualquier momento.
                            </p>
                            <p>
                                <strong>8.2.</strong> En caso de modificaciones, los usuarios serán informados mediante la aplicación o medios electrónicos antes de que los cambios entren en vigor.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-[#FF9F9B] pb-2 inline-block">
                            9. Legislación aplicable
                        </h2>
                        <div className="space-y-4">
                            <p>
                                <strong>9.1.</strong> Los presentes Términos y Condiciones se rigen por la legislación vigente en los Estados Unidos Mexicanos, incluyendo:
                            </p>
                            <ul className="list-disc pl-8 space-y-2 mt-2">
                                <li>Ley General de Salud</li>
                                <li>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</li>
                                <li>Ley General de Transparencia y Acceso a la Información Pública</li>
                            </ul>
                        </div>
                    </section>

                </div>
            </div>

            <Footer />
        </main>
    )
}
